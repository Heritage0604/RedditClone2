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



const Directory :React.FC<Props>=() => {
   const [signOut, loading, error] = useSignOut(auth);
   const setAuthModalState=useSetRecoilState(authModalState)
  return (
   <Menu>
  <MenuButton cursor="pointer" padding="0px 6px" borderRadius={4}>
  <Flex align="center">
  <Flex align="center">
 
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