import React from 'react'

type Props = {}

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

const CommentItem = (props: Props) => {
  return (
    <div>CommentItem</div>
  )
}

export default CommentItem