import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs,  onSnapshot } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import PageContent from '@/components/layout/PageContent'

import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
const[posts,setPosts]=useState([])
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
             <PostItem key={item.id} post={item} userIsCreator={user?.uid===item.creatorId
  }userVoteValue={undefined} onVote={onVote}
  onSelectPost={onSelectPost} onDeletePost={onDeletePost}/>
            </>
            <>Hey</>
     
           </PageContent>
           
    </>
  )
}

export default index