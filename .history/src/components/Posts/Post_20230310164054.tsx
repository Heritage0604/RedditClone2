import { Community } from '@/atoms/CommunityAtom'
import React,{useEff} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
    const getPosts = async()=>{}
    useEffect(()=>{

    })
  return (
    <div>Post</div>
  )
}

export default Post