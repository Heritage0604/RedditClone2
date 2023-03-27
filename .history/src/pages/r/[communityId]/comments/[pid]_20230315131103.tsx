import PostItem from '@/components/Posts/PostItem'
import PageContent from '@/components/layout/PageContent'
import React from 'react'

type Props = {}

const PostPage = () => {
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
  return (
  <PageContent>
<>
<PostItem/>
</>
<>
{/* about</> */}
  </PageContent>
  )
}

export default PostPage