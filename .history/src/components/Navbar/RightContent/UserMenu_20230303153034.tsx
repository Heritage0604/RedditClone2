import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem, Icon, Flex, Text, MenuDivider } from '@chakra-ui/react'
import React from 'react'
import { User } from 'firebase/auth'
import {FaRedditSquare}from "react-icons/fa"
import{VscAccount} from "react-icons/vsc"
import{IoSparkles} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import {MdOutlineLogin} from "react-icons/md"

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
   <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount}/>
  )
 }
  </MenuButton>
  <MenuList>
    <MenuItem fontSize="12pt" fontWeight={500} _hover={{
     bg:"blue.500",color:'white'
    }}>
    <Flex align="center">
<Icon fontSize={20} as={CgProfile} mr={2}/>
<Text>Profile</Text>
    </Flex>
    </MenuItem>
    
<MenuDivider/>

    <MenuItem fontSize="12pt" fontWeight={500} _hover={{
     bg:"blue.500",color:'white'
    }}>
    <Flex align="center">
<Icon fontSize={20} as={MdOutlineLogin} mr={2}/>
<Text>Logout</Text>
    </Flex>
    </MenuItem>
 
  </MenuList>
</Menu>
  )
}

export default UserMenu