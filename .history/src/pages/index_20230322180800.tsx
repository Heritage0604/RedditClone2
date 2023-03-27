import PageContent from '@/components/layout/PageContent'
import { query,collection,where, orderBy,getDocs,limit } from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firestore,auth } from '@/firebase/ClientApp'

type Props = {}

const index:React.FC<Props> = (props: Props) => {
  const [user,loadingUser]=useAuthState(auth)
  const[loading,setLoading]=useState(false)
  const{}=usePosts()
  const buildUserHomeFeed=()=>{}
  const buildNoUserHomeFeed=async ()=>{
    setLoading(true)
    try{
const postQuery=query(collection(firestore,"posts"),
orderBy("voteStatus","desc"),limit(10))
const postDocs=await getDocs(postQuery)
const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
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