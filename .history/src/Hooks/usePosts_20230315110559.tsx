import { Post, postState } from '@/atoms/PostAtom'
import { storage,firestore } from '@/firebase/ClientApp'
import { doc,deleteDoc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = () => {
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
    const onVote =async(post:Post,vote:number,communityId:string)=>{
if(newVote){

}
// modification to old vote
else{

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