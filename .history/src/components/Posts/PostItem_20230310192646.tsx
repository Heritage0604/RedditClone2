import { Post } from '@/atoms/PostAtom'
import React from 'react'

type Props = {
    post:Post
    userIsCreator:boolean
    userVoteValue:num
}

const PostItem = (props: Props) => {
  return (
    <div>PostItem</div>
  )
}

export default PostItem