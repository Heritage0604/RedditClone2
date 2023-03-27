import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = (props: Props) => {
    const[postStateValu,setPostStateValue]=useRecoilState()
  return (
    <div>usePosts</div>
  )
}

export default usePosts