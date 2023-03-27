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

const handleClode=()=>{
setModalState(prev=>{...Prehear,open:false})
}
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={modalState.open} onClose={}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo vero modi eligendi pariatur nemo ipsa quos laborum reprehenderit voluptatibus nostrum minima eos ipsum eius possimus ea esse, eum quam iste tempore vel, officia error assumenda! Eaque harum, optio, reiciendis nulla aperiam perspiciatis delectus unde est adipisci error hic nesciunt!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AuthModal