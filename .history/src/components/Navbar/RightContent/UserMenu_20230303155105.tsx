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

const UserMenu :React.FC<Props>=({user}) => {
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
  display={{base:"none",md:"flex"}}>

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

   {user?(
    <>
      <MenuItem fontSize="12pt" fontWeight={500} _hover={{
     bg:"blue.500",color:'white'
    }}>
    <Flex align="center">
<Icon fontSize={20} as={CgProfile} mr={2}/>
<Text>Profile</Text>
    </Flex>
    </MenuItem>

<MenuDivider/>
{/* LogoutButton */}
    <MenuItem fontSize="12pt" fontWeight={500} _hover={{
     bg:"blue.500",color:'white'
    }} onClick={()=>signOut()}>
    <Flex align="center">
<Icon fontSize={20} as={MdOutlineLogin} mr={2}/>
<Text>Logout</Text>
    </Flex>
    </MenuItem>
    </>
   ):
   <>
   <MenuItem fontSize="12pt" fontWeight={500} _hover={{
     bg:"blue.500",color:'white'
    }} onClick={()=>setAuthModalState({open:true,view:'login'})}>
    <Flex align="center">
<Icon fontSize={20} as={MdOutlineLogin} mr={2}/>
<Text>Log In /Sign Up</Text>
    </Flex>
    </MenuItem>
   </>}
  
 
  </MenuList>
</Menu>
  )
}

export default UserMenu