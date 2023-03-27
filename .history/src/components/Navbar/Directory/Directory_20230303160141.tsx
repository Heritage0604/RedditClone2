import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem, Icon, Flex, Text, MenuDivider } from '@chakra-ui/react'
import React from 'react'
import { User } from 'firebase/auth'
import {FaRedditSquare}from "react-icons/fa"
import{VscAccount} from "react-icons/vsc"
import{IoSparkles} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import {MdOutlineLogin} from "react-icons/md"
import { auth } from '@/firebase/ClientApp'
import { useSignOut } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/AuthModalAtom'

type Props = {
 user?:User |null
}

const Directory :React.FC<Props>=({user}) => {
   const [signOut, loading, error] = useSignOut(auth);
   const setAuthModalState=useSetRecoilState(authModalState)
  return (
   <Menu>
  <MenuButton cursor="pointer" padding="0px 6px" borderRadius={4}>
  <Flex align="center">
  <Flex align="center">
  {user ?
  (
   <>
  <Icon fontSize={24} mr={1} as={FaRedditSquare} color={"gray.300"}/>
  <Flex direction="column"
  display={{base:"none",md:"flex"}}
  fontSize={"8pt"}
  align="flex-start">
<Text fontWeight={700}>
{user?.displayName || user.email?.split("@")[0]}
</Text>
<Flex>
 <Icon as={IoSparkles} color={"brand.100"} mr={1}/>
 <Text color={"gray.400"}> 1 Karma</Text>
</Flex>
  </Flex>
  </> 
  ): (
   <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount}/>
   )
  }
  </Flex>
  <ChevronDownIcon/>
  </Flex>
  </MenuButton>
  <MenuList>

   
  
 
  </MenuList>
</Menu>
  )
}

export default Directory