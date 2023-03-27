import { Post } from '@/atoms/PostAtom'
import { User } from 'firebase/auth'
import React from 'react'

type Props = {
    user:User
    selectPost:Post
    communitId:string
}

const Comments = ({user,selectedPost,communityId}) => {


    
  return (
    <div>Here are the comments</div>
  )
}

export default Comments