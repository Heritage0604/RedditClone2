import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

type Props = {
 open:boolean
}

const CreateCommunityModal:React.FC<Props> = ({open}) => {
  return (
 
    <>
      <Modal isOpen={open} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo unde, suscipit fugiat eligendi saepe impedit tempore obcaecati quo quaerat eum at eaque, odio consequuntur a rem, voluptate excepturi voluptatem laboriosam.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default CreateCommunityModal