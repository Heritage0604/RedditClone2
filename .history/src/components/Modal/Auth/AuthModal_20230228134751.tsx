import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {useRecoilState} from "recoil"
import { authModalState } from '@/atoms/AuthModalAtom'
import { Preahvihear } from 'next/font/google'
type Props = {}


const AuthModal = (props: Props) => {
// used a state from recoil
const[modalState,setModalState] =useRecoilState(authModalState)

const handleClose=()=>{
setModalState(prev=>({...prev,open:false}))
}
  return (
    <>
     

      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
           {modalState.view==='login'&&'Login'}
           {modalState.view==='signup'&&'Sign Up'}
           {modalState.view==='resetpassword'&&'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection={"column"}>
       
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AuthModal