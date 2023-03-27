import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'
import { auth } from '@/firebase/ClientApp'
import { useSignOut } from 'react-firebase-hooks/auth';
import { User } from 'firebase/auth'


type RightContentProps = {
  user :User
}

const RightContent:React.FC<RightContentProps> = ({user}) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
    <AuthModal/>
    <Flex justify={"center"} align={"center"}>
     {user? <Button isLoading={loading} onClick={()=> signOut()}>Logout </Button> : <AuthButtons/> }
    </Flex>
    </>
  )
}

export default RightContent