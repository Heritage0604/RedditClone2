import { Post, postState,PostVote } from '@/atoms/PostAtom'
import { storage,firestore, auth } from '@/firebase/ClientApp'
import { deleteObject, ref } from 'firebase/storage'
import React,{useState,useRef,useEffect} from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { Community, communityState } from "@/atoms/CommunityAtom";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useRouter } from "next/router";


type Props = {}

const usePosts = () => {
   const [user, loadingUser] = useAuthState(auth);
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
    console.log(postStateValue)
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const communityStateValue = useRecoilValue(communityState);



 const onVote=async()=>{
try{

}catch(error){
  
}
 }

   
    const onSelectPost=()=>{}
    const onDeletePost=async(post:Post):Promise<boolean>=>{ 
      try{
        if(post.imageURL){
          const imageRef=ref(storage,`posts/${post.id}/image`)
          await deleteObject(imageRef)
          
        }
        const postDocRef=doc(firestore,"posts",post.id!)
        await deleteDoc(postDocRef)
          setPostStateValue((prev:any)=>({...prev,
        posts:prev.posts.filter((item:any)=>item.id !==post.id)}))
      
        // check if there is an immage
        // delete the post document
        // update recoil state
        return true
      }catch(error:any){
        console.log("errors",error.message) 
         console.log("i am post",post)
return false
      }

    }
return{
  postStateValue,
 setPostStateValue,
 onVote,
 onSelectPost,
 onDeletePost
}
}

export default usePosts