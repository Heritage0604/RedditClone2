import { Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'


const OauthButton = () => {
  return (
   <Flex>
    <Button variant="oauth">
     <Image src="/images/googlelogo.png" alt="Google" height="25px"/>
<Text >
 </Text>
 
 </Button>
   </Flex>
  )
}

export default OauthButton