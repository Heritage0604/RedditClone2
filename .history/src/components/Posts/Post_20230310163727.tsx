import { Community } from '@/atoms/CommunityAtom'
import React from 'react'

type Props = {
    communityData:Community
    userId:string
}

const Post:React.FC = (props: Props) => {
  return (
    <div>Post</div>
  )
}

export default Post