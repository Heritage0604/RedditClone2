import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem, Icon, Flex } from '@chakra-ui/react'
import React from 'react'
import { User } from 'firebase/auth'
import {FaRedditSquare}from "react-icons/fa"
import{VscAccount} from "react-icons/vsc"
import{IoSparkles} from "react-icons/io5"

type Props = {
 user?:User |null
}

const UserMenu :React.FC<Props>=({user}) => {
  return (
   <Menu>
  <MenuButton cursor="pointer" padding="0px 6px" borderRadius={4}>
  {user ?
  (
  <Flex align="center">
  <Flex align="center">
   <>
  
  <Icon fontSize={24} mr={1} as={FaRedditSquare} color={"gray.300"}/>
  </> 
  <ChevronDownIcon/>
  </Flex>
  </Flex>
  ): (
   <Icon fo
  )
 }
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  )
}

export default UserMenu