import usePosts from '@/Hooks/usePosts'
import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PostItem from './PostItem'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
    communityData:Community

}

const Post:React.FC<Props> = ({communityData}) => {
  console.log("Hi i am community Data",communityData)
  const [user]=useAuthState(auth)
    const[loading,setLoading]=useState(false)
    const[postList,setPostList]=useState()
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
   
   
    // useEffect Hook
    useEffect(()=>{
    let timer = setTimeout(() => {
      
    getPosts()
  }, 1000);
 return () => clearTimeout(timer)
})

  return (
  <Stack>
{postList && postStateValue?.posts.map((item)=>(
  <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}/>
))}
  </Stack>
  )
}

export default Post