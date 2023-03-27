import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
           <Header communityData={communityData}/>
           <PageContent>
            <>
            <CreatePostLink/>
            <Post communityData={communityData}/>
            </>
            <><About communityData={communityData}/></>
     
           </PageContent>
           </>


  )
}
