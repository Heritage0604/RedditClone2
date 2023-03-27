import React from 'react'


type Props = {}

const usePosts = (props: Props) => {
    const[postStateValu,setPostStateValue]=useRecoilState()
  return (
    <div>usePosts</div>
  )
}

export default usePosts