import usePosts from '@/Hooks/usePosts'
import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import { auth } from '@/firebase/ClientApp'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const PostPage = () => {
    const[user]=useAuthState(auth)
      const router = useRouter();
  const { community, pid } = router.query;
  const { communityStateValue } = useCommunityData();
    const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()
  const fetchPost = async () => {
    console.log("FETCHING POST");

    setLoading(true);
    try {
      const postDocRef = doc(firestore, "posts", pid as string);
      const postDoc = await getDoc(postDocRef);
      setPostStateValue((prev) => ({
        ...prev,
        selectedPost: { id: postDoc.id, ...postDoc.data() } as Post,
      }));
      // setPostStateValue((prev) => ({
      //   ...prev,
      //   selectedPost: {} as Post,
      // }));
    } catch (error: any) {
      console.log("fetchPost error", error.message);
    }
    setLoading(false);
  };

  // Fetch post if not in already in state
  useEffect(() => {
    const { pid } = router.query;

    if (pid && !postStateValue.selectedPost) {
      fetchPost();
    }
  }, [router.query, postStateValue.selectedPost]);

  return (
 <PageContentLayout>
      {/* Left Content */}
      <>
        {loading ? (
          <PostLoader />
        ) : (
          <>
            {postStateValue.selectedPost && (
              <>
                <PostItem
                  post={postStateValue.selectedPost}
                  // postIdx={postStateValue.selectedPost.postIdx}
                  onVote={onVote}
                  onDeletePost={onDeletePost}
                  userVoteValue={
                    postStateValue.postVotes.find(
                      (item) => item.postId === postStateValue.selectedPost!.id
                    )?.voteValue
                  }
                  userIsCreator={
                    user?.uid === postStateValue.selectedPost.creatorId
                  }
                  router={router}
                />
                <Comments
                  user={user}
                  community={community as string}
                  selectedPost={postStateValue.selectedPost}
                />
              </>
            )}
          </>
        )}
      </>
      {/* Right Content */}
      <>
        <About
          communityData={
            communityStateValue.currentCommunity
            // communityStateValue.visitedCommunities[community as string]
          }
          loading={loading}
        />
      </>
    </PageContentLayout>
  )
}

export default PostPage