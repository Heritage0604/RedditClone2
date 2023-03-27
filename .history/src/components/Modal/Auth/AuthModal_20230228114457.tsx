import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
type Props = {}

const AuthModal = (props: Props) => {

const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium veniam ab sunt saepe dolorum qui et cum officiis expedita nisi, vitae perspiciatis velit culpa voluptatem quasi unde hic eaque sed tempora, maiores facilis! Quia, deleniti? Quis dolor, hic esse, expedita sit explicabo eos exercitationem impedit omnis modi harum rem porro possimus nesciunt quae quisquam. Cum, magnam nobis minima est quaerat amet voluptas, doloremque quia ullam, voluptates provident possimus. Facere consequatur minus impedit nihil rerum! Beatae magni dicta eum quisquam sequi voluptatem, optio ab, pariatur recusandae sit odio. Provident natus consequatur blanditiis sapiente, quibusdam dolores omnis, esse illo maiores, inventore ex.
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