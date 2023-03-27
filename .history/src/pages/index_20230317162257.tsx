import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageContent from '@/components/layout/PageContent'
import Post from '@/components/Posts/Post'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
