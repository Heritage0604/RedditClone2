import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'
import { auth } from '@/firebase/ClientApp'
import { useSignOut } from 'react-firebase-hooks/auth';
import { User } from 'firebase/auth'
import Icons from './Icons'


type RightContentProps = {
  user ?:User|null
}

const RightContent:React.FC<RightContentProps> = ({user}) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
    <AuthModal/>
    <Flex justify={"center"} align={"center"}>
     {user? <Icons/> : <AuthButtons/> }
    </Flex>
    </>
  )
}

export default RightContent