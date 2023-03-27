import { auth } from '@/firebase/ClientApp'
import { Flex, Image } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Directory from './Directory/Directory'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'
import router from "next/router";
import useDirectory from "@/hooks/useDirectory";
import {
  defaultMenuItem,
  directoryMenuState,
} from "../../atoms/directoryMenuAtom";



const Navbar = () => {
  const[user,loading,error]=useAuthState(auth)
   const { onSelectMenuItem } = useDirectory();
  return (
  <Flex bg="white" height="44px" padding="6px 12px" justify={{md:"space-between"}} onClick={()=> onSelectMenuItem(defaultMenuItem)}>
   <Flex align={"center"} width={{base:"40px",md:"auto"}} mr={{base:0 ,sm:2}}>
  <Image src="/images/redditFace.svg" height="30px" display={{base:"none", md:"unset"}} />
  <Image src="/images/redditText.svg" height="40px" display={{base:"none", md:"unset"}}/>
   </Flex>
{user && <Directory/>}
 <SearchInput  user={user}/>
<RightContent user={user}/>
  </Flex>
  )
}

export default Navbar