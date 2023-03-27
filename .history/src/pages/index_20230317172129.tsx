import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import usePosts from '@/Hooks/usePosts'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs,  onSnapshot } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PageContent from '@/components/layout/PageContent'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
const[posts,setPosts]=useState<Array></Array>([])
const [user]=useAuthState(auth)
  const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
const postDocRef = query(collection(firestore, "posts"));
const postDoc = onSnapshot(postDocRef, (querySnapshot) => {

  querySnapshot.forEach((doc) => {
    setPosts(doc.data())
    console.log(posts)
  //  console.log(doc.data())
  });

});


  return (
    <>
      
      
           <PageContent>
            <>
{posts && posts.map((item)=>(
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