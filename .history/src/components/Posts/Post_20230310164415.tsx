import { Community } from '@/atoms/CommunityAtom'
import React,{useEffect,useState} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
    const getPosts = async()=>{
        try{
            
        }catch(error){}
    }
    useEffect(()=>{
getPosts()
    })
  return (
    <div>Post</div>
  )
}

export default Post