import { Community } from '@/atoms/CommunityAtom'
import { Post } from '@/atoms/PostAtom'
import { firestore,auth } from '@/firebase/ClientApp'
import { query,collection,where, orderBy,getDocs,collection, query, where, onSnapshot } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  return (
    <div>index</div>
  )
}

export default index