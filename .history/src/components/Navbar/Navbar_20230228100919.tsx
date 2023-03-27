import { Flex, Image } from '@chakra-ui/react'
import React from 'react'



const Navbar = () => {
  return (
  <Flex bg="white" height="44px" padding="6px 12px">
   <Flex>
  <Image src="/images/redditFace.svg" height="30px"/>
  <Image src="/images/redditText.svg" height={""}/>
   </Flex>
 
  </Flex>
  )
}

export default Navbar