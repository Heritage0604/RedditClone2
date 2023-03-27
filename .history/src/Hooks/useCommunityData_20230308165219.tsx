import { Community, communityState } from '@/atoms/CommunityAtom'
import { auth,firestore } from '@/firebase/ClientApp'
import { getDocs,collection} from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
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
            const snippetDocs=await getDocs(collection(firestore,`users/${user?.uid}/communitySnippets`))
            const snippets=snippetDocs.docs.map((doc)=>({...doc.data()}))
            console.log(snippets)
        }catch(error){
console.log("get my snippets error",error)
        }
    }
    const joinCommunity=(communityData:Community)=>{}
    const leaveCommunity=(communityId:string)=>{}
    useEffect(()=>{
        if()
getMySnippets()
    },[user])
  return {
    communityStateValue,
   onJoinOrLeaveCommuity
  }
    
  
}

export default useCommunityData