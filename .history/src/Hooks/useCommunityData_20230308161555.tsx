import { communityState } from '@/atoms/CommunityAtom'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData:React.FC = () => {
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
  return {
    communityStateValue
  }
    
  
}

export default useCommunityData