import React,{useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Divider,
  Text,
  Input
} from '@chakra-ui/react'

type Props = {
 open:boolean
 handleClose:()=>void
}

const CreateCommunityModal:React.FC<Props> = ({open,handleClose}) => {
 const [communityName,setCommuntyName]=useState("")
 const[charRemainig,setCharRemainig]=useState(21)
 const handleChange=()=>{
  // recalculate how many char left
 }
  return (
 
    <>
      <Modal isOpen={open} onClose={handleClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" flexDirection={"column"} fontSize={15} padding={3}>Create a Community</ModalHeader>
          <Box pl={3} pr={3}>
           <Divider />
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" padding={10}>
          <Text fontWeight={600} fontSize={15}>Name</Text>
          <Text fontWeight={600} fontSize={11} color="gray.500">Commuties name can not be changed after they have been created</Text>
         <Text position="relative" top="28px" left="10px" color="gray.400" width="20px" >r/</Text>
         <Input  position="relative" value={communityName} size="sm" pl="22px" onChange={handleChange}/>
         <Text> {21} Character remainig</Text>
          </ModalBody>
          </Box>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClose} >
              Close
            </Button>
            <Button variant='ghost'>Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default CreateCommunityModal