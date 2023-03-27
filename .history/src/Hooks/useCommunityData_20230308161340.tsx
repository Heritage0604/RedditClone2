import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const useCommunityData:React.FC = () => {
    const [communityStateValue,setCommunityStateValue]=useRecoilState()
  return (
    <div>useCommunityData</div>
  )
}

export default useCommunityData