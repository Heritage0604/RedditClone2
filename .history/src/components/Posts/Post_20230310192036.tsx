import usePosts from '@/Hooks/usePosts'
import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {[]
    const[loading,setLoading]=useState(false)
    const{postStateValue,setPostStateValue}=usePosts()
    const getPosts = async()=>{
        try{

const postQuery=query(collection(firestore,"posts"),where(`communityId`,"==",communityData.id),orderBy("createdAt","desc"))
const postDocs=await getDocs(postQuery)
const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
setPostStateValue(prev=>({...prev,posts:posts as Post}))
console.log(postQuery)
console.log("posts",posts)
        }catch(error:any){
console.log("error",error.message)
        }
    }
    useEffect(()=>{
getPosts()
    },[])
  return (
    <div>Post</div>
  )
}

export default Post