import usePosts from '@/Hooks/usePosts'
import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import { auth, firestore } from '@/firebase/ClientApp'
import React,{useState,useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";
import { doc, getDoc } from 'firebase/firestore'
import { Post } from '@/atoms/PostAtom'
import About from '@/components/Community/About'
import useCommunityData from '@/Hooks/useCommunityData'

type Props = {}

const PostPage = () => {
const [user] = useAuthState(auth);
  const router = useRouter();
   const { communityStateValue } = useCommunityData();
    const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()

  const fetchPost = async (postId:string) => {
    console.log("FETCHING POST");

  
    try {
      const postDocRef = doc(firestore, "posts", postId as string);
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
   
  };

  // Fetch post if not in already in state
  useEffect(() => {
    const { pid } = router.query;

    if (pid && !postStateValue.selectedPost) {
      fetchPost(pid as string);
    }
  }, [router.query, postStateValue.selectedPost]);

  return (
<PageContent>
    <>
    {postStateValue.selectedPost && (
        <PostItem post={postStateValue.selectedPost}
        onVote={onVote} onDeletePost={onDeletePost}
        userIsCreator={user?.uid===postStateValue.selectedPost?.creatorId}/>
    )}
    <Comments
    </>
    <>
    {communityStateValue.currentCommunity && <About
          communityData={
            communityStateValue.currentCommunity
            // communityStateValue.visitedCommunities[community as string]
          }
       
        />}
    </>
</PageContent>
  )
}

export default PostPage