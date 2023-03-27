import { authModalState } from '@/atoms/AuthModalAtom'
import { auth } from '@/firebase/ClientApp'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Icon, Menu, MenuButton, MenuList, Text,Image } from '@chakra-ui/react'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {TiHome} from "react-icons/ti"
import Communities from './Communities'
import { communityState } from '@/atoms/CommunityAtom'
import useDirectory from '@/Hooks/useDirectory'



const Directory :React.FC=() => {
  const { directoryState, toggleMenuOpen } = useDirectory();

  return (
   <Menu  isOpen={directoryState.isOpen}>
  <MenuButton cursor="pointer" mr={2} ml={2} padding="0px 6px" borderRadius={4}
  _hover={{
   outline:"1px solid",
   outlineColor:"gray.200"}} 
   onClick={toggleMenuOpen}
  >
  <Flex align="center" justify={"space-between"} width={{base:"auto",lg:"200px"}}>
  <Flex align="center">
    {directoryState.selectedMenuItem.imageURL ? (
  <Image src={}/>
      ):
      <Icon as={directoryState.selectedMenuItem.icon} color={directoryState.selectedMenuItem.iconColor} fontSize={22} mr={{base:1,md:2}} />
    
    }
<Flex display={{base:"none",md:"flex"}} fontWeight={600} fontSize={"10pt"}>
 <Text>
{directoryState.selectedMenuItem.displayText}

 </Text>
</Flex>

  </Flex>
  <ChevronDownIcon/>
  </Flex>
  </MenuButton>
  <MenuList>

   {/* communities */}
  <Communities/>
 
  </MenuList>
</Menu>
  )
}

export default Directory