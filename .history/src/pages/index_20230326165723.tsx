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
if(communityStateValue.mySnippets.length){
const myCommunityId=communityStateValue.mySnippets.map((snippt)=)
}
else{
  buildNoUserHomeFeed()
}
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
<AspectRatio   ratio={16 / 9}>
  <iframe
    title='naruto'
    src='https://firebasestorage.googleapis.com/v0/b/reddit-clone-2-46219.appspot.com/o/video%2Fday_3_of_reddit_clone%20(720p).mp4?alt=media&token=606cc5b1-ebee-448d-80aa-fa37ff9a4669'
    allowFullScreen
  />
</AspectRatio>
</>
<>


{/* // This video will have equal sides */}

</>
 </PageContent>
  )
}

export default index