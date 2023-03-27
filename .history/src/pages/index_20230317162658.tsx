import { Community, communityState } from '@/atoms/CommunityAtom'
import About from '@/components/Community/About'
import CommunityNotFound from '@/components/Community/CommunityNotFound'
import CreatePostLink from '@/components/Community/CreatePostLink'
import Header from '@/components/Community/Header'
import Post from '@/components/Posts/Post'
import PageContent from '@/components/layout/PageContent'
import { firestore } from '@/firebase/ClientApp'
import { doc, getDoc , collection, query, where, onSnapshot} from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import { Inter } from 'next/font/google'
import React,{useEffect} from 'react'
import { useSetRecoilState } from 'recoil'
import safeJsonStringify from "safe-json-stringify"
const inter = Inter({ subsets: ['latin'] })


type Props = {
    communityData:Community
}

const Home:React.FC<Props> = ({communityData}) => {

  return (
     <>
         
           <PageContent>
            <>
            <Post communityData={communityData}/>
            </>
            <>Hey</>
     
           </PageContent>
           </>


  )
}
export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("GET SERVER SIDE PROPS RUNNING");

  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);
   return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }) // needed for dates
            )
          : "",
      },
    }
  } catch (error) {
  
    // Could create error page here
    console.log("getServerSideProps error - [community]", error);
    console.log("it was an errrrororoor")
    
    return{
      props:{
        communityData:""
      }
    }
  }
}
