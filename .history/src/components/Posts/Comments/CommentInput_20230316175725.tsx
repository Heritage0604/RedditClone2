import { User } from 'firebase/auth'
import React from 'react'

type Props = {
    commentText:string
    setCommentText:(commentText:string) => void
    user:User
    createLoading:boolean
    onCreateComment:(commentTetxt:string)=>void
}

const CommentInput:React.FC<Props> = ({commentText,setCommentTexter,createLoading,onCreateComment}) => {
  return (
    <div>CommentInput</div>
  )
}

export default CommentInput