import { Community, communityState } from '@/atoms/CommunityAtom'
import { auth } from '@/firebase/ClientApp'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData = () => {
    const[user]=useAuthState(auth)
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
    const onJoinOrLeaveCommuity=(communityData:Community,isJoined:boolean) => {

    }
    const getMySnippets=async()=>{
        try{
            const snip

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