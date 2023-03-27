import { Community } from '@/atoms/CommunityAtom'
import { query } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
    const[loading,setLoading]=useState(false)
    const getPosts = async()=>{
        try{

const postQuery=query(collection(firestore,"posts"))

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