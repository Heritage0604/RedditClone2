import { authModalState } from '@/atoms/AuthModalAtom'
import { Community, communityState,CommunitySnippet } from '@/atoms/CommunityAtom'
import { auth,firestore } from '@/firebase/ClientApp'

import { getDocs,collection,doc, writeBatch, increment} from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useSetRecoilState } from 'recoil'


type Props = {}

const useCommunityData = () => {
    const[user]=useAuthState(auth)
    const [communityStateValue,setCommunityStateValue]=useRecoilState(communityState)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
    const setAuthModalState = useSetRecoilState(authModalState);
    const onJoinOrLeaveCommuity=(communityData:Community,isJoined:boolean) => {
        if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

    setLoading(true);
    if (isJoined) {
      leaveCommunity(communityId);
      return;
    }
    joinCommunity(communityData);
    }
    const getMySnippets=async()=>{
        try{
            const snippetDocs=await getDocs(collection(firestore,`users/${user?.uid}/communitySnippets`))
            const snippets=snippetDocs.docs.map((doc)=>({...doc.data()}))
            setCommunityStateValue(prev=>({...prev,mySnippets:snippets as CommunitySnippet[]}))
            console.log(snippets)
        }catch(error:any){
console.log("get my snippets error",error)
       setError(error.message)
        }
        setLoading(false)
    }
    const joinCommunity= async(communityData:Community)=>{
        // create a community snippet when the user joins this community
        // updating the number of members of the community
        // update recoilsstate
        try{
            const batch=writeBatch(firestore)
            const newSnippet:CommunitySnippet={
                  communityId:communityData.id,
                  imageURL:communityData.imageURL || ""
            }
            batch.set(doc(firestore,`users/${user?.uid}/communitySnippets`,communityData.id),newSnippet)
            batch.update(doc(firestore,`communities`,`${communityData.id}`),{
                numberOfMembers:increment(1)
            })
           
             await batch.commit()
             setCommunityStateValue(prev=>({...prev,mySnippets:[...prev.mySnippets,newSnippet]}))
        }catch(error:any){
            setError(error.message)
        }
        setLoading(false)
    }
    const leaveCommunity=async(communityId:string)=>{
        // delete a community snippet when the user joins this community
        // updating the number of members of the community
        // update recoilsstate
        try{
             const batch=writeBatch(firestore)
             batch.delete(doc(firestore,`users/${user?.uid}/communitySnippets`,communityId))
             batch.update(doc(firestore,`communities`,`${communityId}`),{
               numberOfMembers:increment(-1)
             })
              await batch.commit()
              setCommunityStateValue(prev=>({...prev,mySnippets:prev.mySnippets.filter(item=>item.communityId!==communityId)}))

        }catch(error:any){
setError(error.message)
        }
        setLoading(false)
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