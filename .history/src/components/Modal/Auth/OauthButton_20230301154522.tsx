import { Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'


const OauthButton = () => {
  return (
   <Flex>
    <Button>
     <Image src="/images/googlelogo.png" alt="Google" height="25px"/>

    </Button>
   </Flex>
  )
}

export default OauthButton