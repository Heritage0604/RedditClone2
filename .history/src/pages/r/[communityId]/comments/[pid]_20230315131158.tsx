import usePosts from '@/Hooks/usePosts'
import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import React from 'react'

type Props = {}

const PostPage = () => {
    const{postStateValue,setPostStateValue, onVote,
 onDeletePost}=usePosts()
  return (
  <PageContent>
<>
<PostItem post={postStateValue.selectedPost}/>
</>
<>
{/* about</> */}
  </PageContent>
  )
}

export default PostPage