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
import CreatePostLink from '@/components/Community/CreatePostLink'
import { RWebShare } from "react-web-share";
import { useRecoilValue } from 'recoil'
import { communityState } from '@/atoms/CommunityAtom'
import { AspectRatio } from '@chakra-ui/react'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAuthState(auth)
  const[loading,setLoading]=useState(false)
   const[postList,setPostList]=useState()
    const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
 const communityStateValue=useRecoilValue(communityState)
  const buildUserHomeFeed=()=>{
// get post from user community
try{
setLoading(true)
if(communityStateValue.mySnippets.length){}

}catch(error:any){

}

setLoading(false)
  }
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
if(!user && !loadingUser) buildNoUserHomeFeed()

  },[user,loadingUser])
  return (
 <PageContent>
<>
<CreatePostLink/>
{loading ? (<PostLoader/>) :(
    <Stack>
{postList && postStateValue?.posts.map((item)=>(
  <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}
  homePage/>
))}
  </Stack>
)}
    <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share 🔗</button>
      </RWebShare>

</>
<>


{/* // This video will have equal sides */}
<AspectRatio maxW='560px' ratio={1}>
  <iframe
    title='naruto'
    src='https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/oseNfeCF4I0KtGAMiygkfKAIeD6o5Fw5jQDffEX/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3748&bt=1874&cs=0&ds=3&ft=_RwJrB4vq8ZmoddEJc_vj_voKAhLrus&mime_type=video_mp4&qs=0&rc=OTo7OTM5ZmRkaDM0OzxoO0BpM2t4eTk6ZnhvajMzNzczM0AuYTAuYV8uXjUxYTM1Xl9jYSMuNjM1cjQwaGBgLS1kMTZzcw%3D%3D&btag=80000&expire=1679583302&l=2023032308480144F606FFB327A20A757F&ply_type=2&policy=2&signature=c5fdb05f28bd673b9e6d1d1f5193bac0&tk=tt_chain_token'
    allowFullScreen
  />
</AspectRatio>
</>
 </PageContent>
  )
}

export default index