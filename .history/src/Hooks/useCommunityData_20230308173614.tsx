import { Community, communityState,CommunitySnippet } from '@/atoms/CommunityAtom'
import { auth,firestore } from '@/firebase/ClientApp'
import { AnySoaRecord } from 'dns'
import { getDocs,collection, writeBatch} from 'firebase/firestore'
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
            setCommunityStateValue(prev=>({...prev,mySnippets:snippets as CommunitySnippet[]}))
            console.log(snippets)
        }catch(error:AnySoaRecord){
console.log("get my snippets error",error)
       setError(error.message)
        }
        setLoading(false)
    }
    const joinCommunity=(communityData:Community)=>{
        // create a community snippet when the user joins this community
        // updating the number of members of the community
        // update recoilsstate
        try{
            const batch=writeBatch(firestore)

        }catch(error:any){
            setError(error.message)
        }
    }
    const leaveCommunity=(communityId:string)=>{
        // delete a community snippet when the user joins this community
        // updating the number of members of the community
        // update recoilsstate
    }
    useEffect(()=>{
        if(!user) return
getMySnippets()
    },[user])
  return {
    communityStateValue,
   onJoinOrLeaveCommuity,
   loading
  }
    
  
}

export default useCommunityData