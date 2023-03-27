import usePosts from '@/Hooks/usePosts'
import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import { auth } from '@/firebase/ClientApp'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const PostPage = () => {
    const[user]=useAuthState(auth)
    const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()
  return (
<PageContent>
    <>
    {postStateValue.selectedPost && (
        <PostItem post={postStateValue.selectedPost}
        onVote={onVote} onDeletePost={onDeletePost}
        userIsCreator={user?.uid===postStateValue.selectedPost}
    )}
    
    </>
    <>Hey woman</>
</PageContent>
  )
}

export default PostPage