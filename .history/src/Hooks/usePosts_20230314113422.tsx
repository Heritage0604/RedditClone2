import { Post, postState } from '@/atoms/PostAtom'
import { storage } from '@/firebase/ClientApp'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = () => {
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
    const onVote =async()=>{}
    const onSelectPost=async()=>{}
    const onDeletePost=async(post:Post):Promise<boolean>=>{
      try{
        if(post.imageURL){
          const imageRef=ref(storage,`post/${post.creatorId}/image`)
          await deleteObject(imageRef)
          
        }
        const postDocRef=doc(firestore,"post",)
        // check if there is an immage
        // delete the post document
        // update recoil state
        return true
      }catch(error){
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