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

type Props = {
    user:User
    selectedPost:Post |null
    communityId:string 
}

const Comments:React.FC<Props> = ({user,selectedPost,communityId}) => {

const[commentText,setCommentText]=useState("")
const[comment,setComments]=useState([])
const[fetchLoading,setFetchLoading]=useState(false)
const[createLoading,setCreateLoading]=useState(false)
const onCreateComment=async(commentText:string)=>{
    // update
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