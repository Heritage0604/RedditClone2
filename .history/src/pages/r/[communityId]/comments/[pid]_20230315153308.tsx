import usePosts from '@/Hooks/usePosts'
import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import { auth, firestore } from '@/firebase/ClientApp'
import React,{useState,useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";
import { doc, getDoc } from 'firebase/firestore'
import { Post } from '@/atoms/PostAtom'

type Props = {}

const PostPage = () => {
const [user] = useAuthState(auth);
  const router = useRouter();
    const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()

  const fetchPost = async (postId:string) => {
    console.log("FETCHING POST");

    setLoading(true);
    try {
      const postDocRef = doc(firestore, "posts", postI as string);
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
      fetchPost(pid:string);
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
    
    </>
    <>Hey woman</>
</PageContent>
  )
}

export default PostPage