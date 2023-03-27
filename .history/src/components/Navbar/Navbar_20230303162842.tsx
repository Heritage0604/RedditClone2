import { auth } from '@/firebase/ClientApp'
import { Flex, Image } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Directory from './Directory/Directory'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'



const Navbar = () => {
  const[user,loading,error]=useAuthState(auth)
  return (
  <Flex bg="white" height="44px" padding="6px 12px">
   <Flex align={"center"}>
  <Image src="/images/redditFace.svg" height="30px"/>
  <Image src="/images/redditText.svg" height="40px" display={{base:"none", md:"unset"}}/>
   </Flex>
{ <Directory/>}
 <SearchInput  user={user}/>
<RightContent user={user}/>
  </Flex>
  )
}

export default Navbar