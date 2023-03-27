import { Community } from '@/atoms/CommunityAtom'
import React from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData,userId}) => {
  return (
    <div>Post</div>
  )
}

export default Post