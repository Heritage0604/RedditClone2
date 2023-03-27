import { Community, communityState } from '@/atoms/CommunityAtom'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData = () => {
    
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
    const onJoinOrLeaveCommuity=(communityData:Community,isJoined:boolean) => {

    }
    const getMySnippets=async()=>{
        try{

        }catch(error){

        }
    }
    const joinCommunity=(communityData:Community)=>{}
    const leaveCommunity=(communityId:string)=>{}
  return {
    communityStateValue,
   onJoinOrLeaveCommuity
  }
    
  
}

export default useCommunityData