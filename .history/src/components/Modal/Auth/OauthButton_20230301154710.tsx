import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


const OauthButton = () => {
  return (
   <Flex width="100%" flex>
    <Button variant="oauth">
     <Image src="/images/googlelogo.png" alt="Google" height="25px"/>
<Text>
 Continue with Google
 </Text>
 
 </Button>
   </Flex>
  )
}

export default OauthButton