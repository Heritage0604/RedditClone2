import { Flex, Image } from '@chakra-ui/react'
import React from 'react'



const Navbar = () => {
  return (
  <Flex bg="white" height="44px" padding="6px 12px">
   <Flex align={"center"}>
  <Image src="/images/redditFace.svg" height="30px"/>
  <Image src="/images/redditText.svg" height="40px" display={{base:"none" md}}/>
   </Flex>
 
  </Flex>
  )
}

export default Navbar