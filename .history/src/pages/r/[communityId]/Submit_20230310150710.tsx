import NewPostForm from '@/components/Posts/NewPostForm'
import PageContent from '@/components/layout/PageContent'
import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const submit = (props: Props) => {
  const user=useAuthState
  return (
   <PageContent>
    <>
    <Box p={"14px 0px"} borderBottom={"1px solid"} borderColor={"white"}>
      <Text>Create a post</Text>
    </Box>
    <NewPostForm/>
    </>
    <></>
   </PageContent>
  )
}

export default submit