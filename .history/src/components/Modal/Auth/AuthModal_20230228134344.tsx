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
          <ModalHeader>{modalState.view==='login'&&'Login'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo vero modi eligendi pariatur nemo ipsa quos laborum reprehenderit voluptatibus nostrum minima eos ipsum eius possimus ea esse, eum quam iste tempore vel, officia error assumenda! Eaque harum, optio, reiciendis nulla aperiam perspiciatis delectus unde est adipisci error hic nesciunt!
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AuthModal