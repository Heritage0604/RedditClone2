import { communityState } from '@/atoms/CommunityAtom'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData = () => {
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const onJoinOrLeaveCommuity
    const joinCommunity=()=>{}
    const leaveCommunity=()=>{}
  return {
    communityStateValue,
    joinCommunity,
 leaveCommunity,
  }
    
  
}

export default useCommunityData