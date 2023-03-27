import { Post } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React,{useEffect,useState} from 'react'

type Props = {
    user:User
    selectedPost:Post
    communityId:string
}

const Comments:React.FC<Props> = ({user,selectedPost,communityId}) => {

const onCreateComment=async(commentText:string)=>{}
const onDeleteComment=async(comment:any)=>{}
const getPostComments=async()=>{}
useEffect(()=>{
getPostComments()
},[])

  return (
  <Box bg="white" borderRadius={"0px "}>
  )
}

export default Comments