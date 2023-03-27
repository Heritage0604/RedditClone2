import PageContent from '@/components/layout/PageContent'
import { query,collection,where, orderBy,getDocs } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAuthState(auth)
  const[loading,setLoading]=useState(false)
  const buildUserHomeFeed=()=>{}
  const buildNoUserHomeFeed=()=>{
    setLoading(true)
    try{
const
    }catch(error:any){
console.log("no user error",error.message)
    }
  }
  useEffect(()=>{
if(user &&loadingUser) buildNoUserHomeFeed()
  },[user,loadingUser])
  return (
 <PageContent>
<>Hello</>
<>How are you</>
 </PageContent>
  )
}

export default index