import { Community } from '@/atoms/CommunityAtom'
import React,{useEffect,useState} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
    const[loading,setLoading]=useState(false)
    const getPosts = async()=>{
        try{

podtQuery=query()

        }catch(error:any){
console.log("error",error.message)
        }
    }
    useEffect(()=>{
getPosts()
    })
  return (
    <div>Post</div>
  )
}

export default Post