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
  const communityStateValue=useRecoilValue(com)
  return (
   <PageContent>
    <>
    <Box p={"14px 0px"} borderBottom={"1px solid"} borderColor={"white"}>
      <Text>Create a post</Text>
    </Box>
   {user && <NewPostForm user={user}/>}
    </>
    <></>
   </PageContent>
  )
}

export default submit