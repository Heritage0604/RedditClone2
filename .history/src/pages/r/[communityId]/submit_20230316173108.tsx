import useCommunityData from '@/Hooks/useCommunityData'
import { communityState } from '@/atoms/CommunityAtom'
import About from '@/components/Community/About'
import NewPostForm from '@/components/Posts/NewPostForm'
import PageContent from '@/components/layout/PageContent'
import { auth } from '@/firebase/ClientApp'
import { Box,Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilValue } from 'recoil'

type Props = {

}

const submit = () => {
  const [user]=useAuthState(auth)
  // const communityStateValue=useRecoilValue(communityState);
  const {communityStateValue}=useCommunityData()

  return (
   <PageContent>
    <>

   {user && <NewPostForm user={user}/>}
    </>
    <>
{communityStateValue.currentCommunity && <About
          communityData={
            communityStateValue.currentCommunity
            // communityStateValue.visitedCommunities[community as string]
          }
       
        />}
    </>
   </PageContent>
  )
}

export default submit