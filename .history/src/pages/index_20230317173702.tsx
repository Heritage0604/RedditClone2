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
const[posts,setPosts]=useState([])
const [user]=useAuthState(auth)
  const{postStateValue,setPostStateValue, onVote,
 onSelectPost,
 onDeletePost}=usePosts()
const postDocRef = query(collection(firestore, "posts"));

 useEffect(()=>{
 
  },[])

const postDoc = onSnapshot(postDocRef, (querySnapshot) => {

  // querySnapshot.forEach((doc) => {
  //   setPosts([doc.data()])
  //   console.log(posts)
  // //  console.log(doc.data())
  // });

});

//   const posts=postDocs.docs.map((doc)=>({id:doc.id,...doc.data()}))
// setPostStateValue((prev)=>({
//   ...prev,
//   posts:posts as Post[],
// }))


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