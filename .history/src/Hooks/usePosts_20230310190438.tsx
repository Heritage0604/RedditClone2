import React from 'react'
import { useRecoilState } from 'recoil'


type Props = {}

const usePosts = (props: Props) => {
    const[postStateValue,setPostStateValue]=useRecoilState(ostState)
  return (
    <div>usePosts</div>
  )
}

export default usePosts