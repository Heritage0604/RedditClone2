import { Community } from '@/atoms/CommunityAtom'
import CommunityNotFound from '@/components/Community/CommunityNotFound'
import CreatePostLink from '@/components/Community/CreatePostLink'
import Header from '@/components/Community/Header'
import Post from '@/components/Posts/Post'
import PageContent from '@/components/layout/PageContent'
import { firestore } from '@/firebase/ClientApp'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import safeJsonStringify from "safe-json-stringify"

type Props = {
    communityData:Community
}

const CommunityPage:React.FC<Props> = ({communityData}) => {
    console.log("This is community Data" ,communityData)
    if(!communityData ){

        return (
            <>
            <CommunityNotFound/>
            </>
            )
        }
        return(
           <>
           <Header communityData={communityData}/>
           <PageContent>
            <>
            <CreatePostLink/>
            <Post communityData={communityData}/>
            </>
            <>RHS</>
     
           </PageContent>
           </>
        )
}

export default CommunityPage


