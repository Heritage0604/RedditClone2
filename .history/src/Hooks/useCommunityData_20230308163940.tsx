import { Community, communityState } from '@/atoms/CommunityAtom'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData = () => {
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const onJoinOrLeaveCommuity=(communityData:Community,isJoined:boolean) => {

    }
    const getMySnippets=async()=>{
        try{
            
        }catch(error){}
    }
    const joinCommunity=(communityData:Community)=>{}
    const leaveCommunity=(communityId:string)=>{}
  return {
    communityStateValue,
   onJoinOrLeaveCommuity
  }
    
  
}

export default useCommunityData