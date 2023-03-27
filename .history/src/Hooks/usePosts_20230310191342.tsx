import { postState } from '@/atoms/PostAtom'
import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = (props: Props) => {
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
    const onVote =async()=>{}
    const onSelect=async()=>{}
    const onDeletePost=async()=>{}
return{
  postStateValue,
  setPostStateValue
}
}

export default usePosts