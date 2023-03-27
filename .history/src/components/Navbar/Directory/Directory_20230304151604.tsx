import { authModalState } from '@/atoms/AuthModalAtom'
import { auth } from '@/firebase/ClientApp'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'
import {TiHome} from "react-icons/ti"



const Directory :React.FC=() => {
   const [signOut, loading, error] = useSignOut(auth);
   const setAuthModalState=useSetRecoilState(authModalState)
  return (
   <Menu>
  <MenuButton cursor="pointer" mr={2} ml={2} padding="0px 6px" borderRadius={4}
  _hover={{
   outline:"1px solid",
   outlineColor:"gray.200"
  }}>
  <Flex align="center" justify={"space-between"} width={{base:"auto",lg:"200px"}}>
  <Flex align="center">
<Icon as={TiHome} fontSize={22} mr={{base:1,md:2}} />
<Flex display={{base:"none",md:"flex"}} fontWeight={600} fontSize={"10pt"}>
 <Text>Home</Text>
</Flex>

  </Flex>
  <ChevronDownIcon/>
  </Flex>
  </MenuButton>
  <MenuList>

   {/* communities */}
  COM
 
  </MenuList>
</Menu>
  )
}

export default Directory