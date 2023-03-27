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
    <Box p={"14px 0px"} borderBottom={"1px solid"} borderColor={"white"}>
      <Text>Create a post</Text>
    </Box>
   {user && <NewPostForm user={user} communityImageURL={communityStateValue.currentCommunity?.imageURL}/>}
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