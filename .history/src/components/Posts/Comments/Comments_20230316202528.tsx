import { Post } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React,{useEffect,useState} from 'react'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import CommentInput from './CommentInput';
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'
import { useSetRecoilState } from "recoil";
import {
  collection,
  doc,
  Timestamp,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { authModalState } from '@/atoms/AuthModalAtom';
import usePosts from '@/Hooks/usePosts'




type Props = {
    user:User
    selectedPost:Post |null
    communityId:string 
}

export type Comment={
    id:string
    creatorId:string
    CreatorDisplayText:string
    communityId:string
    postId:string
    postTitle:string
    text:string
    createdAt:Timestamp
    creatorPhotoURL?: string
}

const Comments:React.FC<Props> = ({user,selectedPost,communityId}) => {

const[commentText,setCommentText]=useState("")
const[comments,setComments]=useState<Comment[]>([])
const[fetchLoading,setFetchLoading]=useState(false)
const[createLoading,setCreateLoading]=useState(false)
const setAuthModalState = useSetRecoilState(authModalState);
  const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()
 console.log(user)
  console.log(postStateValue.selectedPost.id)
const onCreateComment=async()=>{
    // update,create,recoil state
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

  
    try {
      const batch = writeBatch(firestore);

      

      // Create comment document
      const commentDocRef = doc(collection(firestore, "comments"));

const newComment={
        id:commentDocRef.id,
      
        creatorId: user.uid,
        creatorDisplayText: user.email!.split("@")[0],
        creatorPhotoURL: user.photoURL!,
        communityId: communityId,
        text: commentText,
        postTitle: postStateValue.selectedPost.title,
        createdAt: serverTimestamp(),
}


      batch.set(commentDocRef, newComment );

      // Update post numberOfComments
      const postDocRef=doc(firestore,"posts",selectedPost.id!)
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });
      await batch.commit();

      setCommentText("");
    //   const { id: postId, title } = selectedPost;

     setComments((prev)=>[
        newComment,
        ...prev
     ])

      // Fetch posts again to update number of comments
    //   setPostState((prev) => ({
    //     ...prev,
    //     selectedPost: {
    //       ...prev.selectedPost,
    //       numberOfComments: prev.selectedPost?.numberOfComments! + 1,
    //     } as Post,
    //     postUpdateRequired: true,
    //   }));
    } catch (error: any) {
      console.log("onCreateComment error", error.message);
    }
   
}
const onDeleteComment=async(comment:any)=>{}
const getPostComments=async()=>{}
useEffect(()=>{
getPostComments()
},[])

  return (
  <Box bg="white" borderRadius={"0px 0px 4px 4px "} p={2}>

<Flex direction="column" pl={10} pr={4} mb={6} fontSize="10pt" width="100%">
<CommentInput
 commentText={commentText} setCommentText={setCommentText} 
 createLoading={createLoading} onCreateComment={onCreateComment} user={user}/>
</Flex>
    </Box>
  )
}

export default Comments