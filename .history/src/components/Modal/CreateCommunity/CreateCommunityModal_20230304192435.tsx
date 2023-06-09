import {
 Box,
 Button,
 Checkbox,
 Divider,
 Flex,
 Input,
 Modal,
 ModalBody,
 ModalCloseButton,
 ModalContent,
 ModalFooter,
 ModalHeader,
 ModalOverlay,
 Stack,
 Text
} from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
 open:boolean
 handleClose:()=>void
}

const CreateCommunityModal:React.FC<Props> = ({open,handleClose}) => {
 const [communityName,setCommunityName]=useState("")
 const[charRemainig,setCharRemainig]=useState(21)
 const[communityType,setCommunityType]=useState("public")
 const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  if (event.target.value.length > 21) return
  // recalculate how many char left
  setCommunityName(event.target.value)
  setCharRemainig(21-event.target.value.length)

 }
 const onCommunityTypeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
setCommunityType(event.target.name)
 }
  return (
 
    <>
      <Modal isOpen={open} onClose={handleClose} >
        <ModalOverlay/>
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
         <Text ml={1} color={charRemainig===0 ? "red" : "gray.500"} fontSize={11}> {charRemainig} Character remainig</Text>
         <Box mt={4} mb={4}>
          <Text fontWeight={600} fontSize={15}>
           Community Type
          </Text>
          <Stack spacing={2}>
             <Checkbox name="public" isChecked={communityType==="public"} onChange={onCommunityTypeChange} >
            <Flex align="center">
                <Text mr={1.5} fontSize={"10pt"}>Public</Text>
              <Text fontSize={"8pt"} color="gray.500" pt={1}>Anyone can view ,post and comment to this community</Text>
            </Flex>
              </Checkbox>
             <Checkbox name="restricted" isChecked={communityType==="restricted"} onChange={onCommunityTypeChange} >
              
                 <Flex align="center">
                <Text mr={1} fontSize={"10pt"}>Restricted</Text>
              <Text fontSize={"8pt"} color="gray.500" pt={1}>Anyone can view this community, but only approved users can post</Text>
            </Flex></Checkbox>
             <Checkbox name="private" isChecked={communityType==="private"} onChange={onCommunityTypeChange} >
                 <Flex align="center">
                <Text mr={1.5} fontSize={"10pt"}>Public</Text>
              <Text fontSize={"8pt"} color="gray.500 pt={1"}Anyone can view ,post and comment to this community</Text>
            </Flex>
             </Checkbox>
            
          </Stack>
         </Box>
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