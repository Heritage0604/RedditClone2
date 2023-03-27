import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs,  onSnapshot } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const index:React.FC<Props> = (props: Props) => {

const postocRef = query(collection(firestore, "posts"));
const unsubscribe = onSnapshot(p, (querySnapshot) => {

  querySnapshot.forEach((doc) => {
   
  });

});


  return (
    <div>index</div>
  )
}

export default index