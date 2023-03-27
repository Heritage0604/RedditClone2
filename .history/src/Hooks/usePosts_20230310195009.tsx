import { postState } from '@/atoms/PostAtom'
import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = () => {
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
    const onVote =async()=>{}
    const onSelectPost=async()=>{}
    const onDeletePost=async()=>{}
return{
  postStateValue,
 setPostStateValue,
 onVote,
 onSelectPost,
 onDelete
}
}

export default usePosts