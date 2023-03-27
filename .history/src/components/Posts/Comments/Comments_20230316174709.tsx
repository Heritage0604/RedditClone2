import { Post } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React from 'react'

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
    
})

  return (
    <div>Here are the comments</div>
  )
}

export default Comments