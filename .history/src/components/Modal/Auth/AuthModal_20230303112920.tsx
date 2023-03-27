import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {useRecoilState} from "recoil"
import { authModalState } from '@/atoms/AuthModalAtom'
import { Preahvihear } from 'next/font/google'
import AuthInputs from './AuthInputs'
import OauthButton from './OauthButton'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/ClientApp'
type Props = {}


const AuthModal = (props: Props) => {
// used a state from recoil
const[modalState,setModalState] =useRecoilState(authModalState)
const[user,loading,error]=useAuthState(auth)

const handleClose=()=>{
setModalState(prev=>({...prev,open:false}))
}

useEffect(()=>{
  if (user) handleClose();
  console.log("user",user)
},[user])

  return (
    <>
     

      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
           {modalState.view==='login'&&'Login'}
           {modalState.view==='signup'&&'Sign Up'}
           {modalState.view==='resetpassword'&&'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10} display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
       <Flex direction={'column'}  justify={"center"} width="70%">
{modalState}
      <OauthButton/>
      <Text color="gray.500" fontWeight={700} textAlign={"center"}>
        OR
      </Text>
     <AuthInputs/>
        {/* Reset Password */}
       </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AuthModal