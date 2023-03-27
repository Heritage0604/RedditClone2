import PageContent from '@/components/layout/PageContent'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAuthState(auth)
  const buildUserHomeFeed=()=>{}
  const buildNoUserHomeFeed=()=>{}
  useEffect(()=>{

  },[user,loadingUser])
  return (
 <PageContent>
<>Hello</>
<>How are you</>
 </PageContent>
  )
}

export default index