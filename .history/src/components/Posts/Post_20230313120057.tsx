import usePosts from '@/Hooks/usePosts'
import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PostItem from './PostItem'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
  const [user]=useAuthState(auth)
    const[loading,setLoading]=useState(false)
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
    const getPosts = async()=>{
        try{

const postQuery=query(collection(firestore,"posts"),where(`communityId`,"==",communityData.id),orderBy("createdAt","desc"))
const postDocs=await getDocs(postQuery)
const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
setPostStateValue((prev)=>({
  ...prev,
  posts:posts as Post[],
}))
console.log(postQuery)
console.log("posts",posts)
console.log("the posts are",postStateValue)
        }catch(error:any){
console.log("error",error.message)
        }
    }
   
    // useEffect Hook
    useEffect(()=>{
    let timer = setTimeout(() => {
    getPosts()
  }, 2500);
 return () => clearTimeout(timer)
})

  return (
  <>
{postStateValue && postStateValue?.posts.map((item)=>(
  <PostItem post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onV/>
))}
  </>
  )
}

export default Post