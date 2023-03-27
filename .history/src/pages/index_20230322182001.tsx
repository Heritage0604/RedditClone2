import PageContent from '@/components/layout/PageContent'
import { query,collection,where, orderBy,getDocs,limit } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'
import usePosts from '@/Hooks/usePosts'
import { Post } from '@/atoms/PostAtom'
import PostItem from '@/components/Posts/PostItem'
import PostLoader from '@/components/Posts/PostLoader'
import { Stack } from '@chakra-ui/react'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAuthState(auth)
  const[loading,setLoading]=useState(false)
   const[postList,setPostList]=useState()
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
  const buildUserHomeFeed=()=>{}
  const buildNoUserHomeFeed=async ()=>{
    setLoading(true)
    try{
const postQuery=query(collection(firestore,"posts"),
orderBy("voteStatus","desc"),limit(10))
const postDocs=await getDocs(postQuery)
const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
setPostStateValue(prev=>({
  ...prev,
  posts:posts as Post[]
}))
setPostList(postStateValue)
    }catch(error:any){
console.log("no user error",error.message)
    }
     setLoading(false)
  }
  useEffect(()=>{
if(user &&loadingUser) buildNoUserHomeFeed()
if(user &&!loadingUser) buildNoUserHomeFeed()
  },[user,loadingUser])
  return (
 <PageContent>
<>
<Create
{loading ? (<PostLoader/>) :(
    <Stack>
{postList && postStateValue?.posts.map((item)=>(
  <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}/>
))}
  </Stack>
)}

</>
<>How are you</>
 </PageContent>
  )
}

export default index