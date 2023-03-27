import { Community } from '@/atoms/CommunityAtom'
import React from 'react'

type Props = {
    communityData:Community
}

const About:React.FC<Props> = ({communityData}) => {
  return (
    <div>About</div>
  )
}

export default About