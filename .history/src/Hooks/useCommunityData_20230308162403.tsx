import { Community, communityState } from '@/atoms/CommunityAtom'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData = () => {
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const onJoinOrLeaveCommuity=(communityData:Community,isJoined:boolean) => {

    }
    const joinCommunity=(communityData:Community)=>{}
    const leaveCommunity=(communityId:string)=>{}
  return {
    communityStateValue,
    joinCommunity,
 leaveCommunity,
  }
    
  
}

export default useCommunityData