import PageContent from '@/components/layout/PageContent'
import { Box,Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const submit = (props: Props) => {
  return (
   <PageContent>
    <>
    <Box p={"14px 0px"} borderBottom={"1px solid"} borderColor={"white"}>
      <Text>Create a post</Text>
    </Box>
    
    </>
    <></>
   </PageContent>
  )
}

export default submit