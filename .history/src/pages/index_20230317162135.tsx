import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageContent from '@/components/layout/PageContent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
         
           <PageContent>
            <>
            <Post communityData={communityData}/>
            </>
            <><About communityData={communityData}/></>
     
           </PageContent>
           </>


  )
}
