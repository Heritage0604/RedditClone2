import { Community } from '@/atoms/CommunityAtom'
import React,{useEffect} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
    const getPosts = async()=>{
        try{}catch(){}
    }
    useEffect(()=>{
getPosts()
    })
  return (
    <div>Post</div>
  )
}

export default Post