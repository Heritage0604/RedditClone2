import { Post, postState } from '@/atoms/PostAtom'
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
  SkeletonCircle,
  SkeletonText,
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
import { useRouter } from "next/router";
import CommentItem from './CommentItem';




type Props = {
    user:User
    selectedPost:Post |null
    
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

const Comments:React.FC<Props> = ({user,selectedPost}) => {

const[commentText,setCommentText]=useState("")

 const router = useRouter();
   const{communityId}=router.query
  
const[comments,setComments]=useState<Comment[]>([])
const[fetchLoading,setFetchLoading]=useState(false)
const[createLoading,setCreateLoading]=useState(false)
const setAuthModalState = useSetRecoilState(authModalState);
const setPostState=useSetRecoilState(postState)

const onCreateComment=async()=>{
    // update,create,recoil state
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

  
    try {
      const batch = writeBatch(firestore);
      const commentDocRef = doc(collection(firestore, "comments"));

const newComment:Comment={
        id:commentDocRef.id,
        postId: selectedPost?.id!,
        creatorId: user.uid,
        CreatorDisplayText: user.email!.split("@")[0],
        creatorPhotoURL: user.photoURL!,
        communityId: communityId!,
        text: commentText,
        postTitle: selectedPost?.title!,
        createdAt: serverTimestamp() as Timestamp,
}


      batch.set(commentDocRef, newComment );

      // Update post numberOfComments
      const postDocRef=doc(firestore,"posts",selectedPost?.id!)
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
      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
        postUpdateRequired: true,
      }));
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

 <Stack spacing={6} p={2}>
        
            {comments.length ? (
              <>
                {comments.map((item: Comment) => (
                  <CommentItem
                    key={item.id}
                    comment={item}
                    onDeleteComment={onDeleteComment}
                    isLoading={}}
                    userId={user?.uid}
                  />
                ))}
              </>
            ) : (
              <Flex
                direction="column"
                justify="center"
                align="center"
                borderTop="1px solid"
                borderColor="gray.100"
                p={20}
              >
                <Text fontWeight={700} opacity={0.3}>
                  No Comments Yet
                </Text>
              </Flex>
            )}
      
      </Stack>

    </Box>
  )
}

export default Comments