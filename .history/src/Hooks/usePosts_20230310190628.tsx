import { postState } from '@/atoms/PostAtom'
import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = (props: Props) => {
    const[postStateValue,setPostStateValue]=useRecoilState(postState)
return[]
}

export default usePosts