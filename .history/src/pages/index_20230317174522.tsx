import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import usePosts from '@/Hooks/usePosts'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs,  onSnapshot } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PageContent from '@/components/layout/PageContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import PostItem from '@/components/Posts/PostItem'

type Props = {}

const index:React.FC<Props> = () => {
const[posts,setPosts]=useState<onject[]([])
const [user]=useAuthState(auth)
  const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
const postDocRef = query(collection(firestore, "posts"));

 useEffect(()=>{
   const postDoc = onSnapshot(postDocRef, (querySnapshot) => {
 setPosts(querySnapshot.docs.map((doc)=>({post:doc.data(),id:doc.id})))
   });
 
  },[])





  return (
    <>
      
      
           <PageContent>
            <>
{posts && posts.map((item:Post)=>(
  <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}/>
))}
            </>
            <>Hey</>
     
           </PageContent>
           
    </>
  )
}

export default index