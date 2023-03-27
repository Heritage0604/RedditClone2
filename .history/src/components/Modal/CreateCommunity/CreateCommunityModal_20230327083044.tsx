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
 Text,
 Icon,
} from '@chakra-ui/react'
import { doc, getDoc, getDocs,runTransaction,serverTimestamp,setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs'
import {HiLockClosed} from "react-icons/hi"
import {firestore,auth} from "../../../firebase/ClientApp"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'



type Props = {
 open:boolean
 handleClose:()=>void
}

const CreateCommunityModal:React.FC<Props> = ({open,handleClose}) => {
  const [user]=useAuthState(auth)
 const [communityName,setCommunityName]=useState("")
 const[charRemainig,setCharRemainig]=useState(21)
 const[communityType,setCommunityType]=useState("public")
 const[errorMessage,setErrorMessage]=useState("")
 const[success,setsuccess]=useState("")
const[loading,setloading]=useState(false)
const router=useRouter()

 const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  if (event.target.value.length > 21) return
  // recalculate how many char left
  setCommunityName(event.target.value)
  setCharRemainig(21-event.target.value.length)

 }
 const onCommunityTypeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
setCommunityType(event.target.name)
 }

//  create community 
const handleCreateCommunity= async ()=>{
if(errorMessage) setErrorMessage("")
if(success) setsuccess("")
const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
if(format.test(communityName) || communityName.length <3){
  setErrorMessage("Community names must be 3 -21 characters and can only contain letters,numbers,or underscores")
return
}
setloading(true)

try{
const communityDocRef = doc(firestore,"communities",communityName)
  await runTransaction(firestore, async (transaction)=>{
    const communityDoc= await transaction.get(communityDocRef)
    if(communityDoc.exists()){
     throw new Error( `sorry, r/${communityName} is taken,Try another`)
      
    }
    
    await transaction.set(communityDocRef,{
     // validate the community name
     // the community name isnt alrady takenby someone
     // create the community in firebase
     creatorId:user?.uid,
    createdAt:serverTimestamp(),
    numberofMembers:1,
    privacyType:communityType
  
  })
  setsuccess(`Community r/${communityName} created successfully`)
setCommunityName("")
  setloading(false) 
  transaction.set(doc(firestore,`users/${user?.uid}/communitySnippets`,communityName),{
    communityId:communityName,
    isModerator:true,

  })
  })
  handleClose()
router.push(`r/${communityName}`)

} catch(error:any){
  console.log(error)
  setloading(false) 
  setErrorMessage(error.message)
}






}
  return (
 
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg" >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader display="flex" flexDirection={"column"} fontSize={15} padding={3}>Create a Community</ModalHeader>
          <Box pl={3} pr={3}>
           <Divider />
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" padding={"10px 1px"}>
          <Text fontWeight={600} fontSize={15}>Name</Text>
          <Text fontWeight={600} fontSize={11} color="gray.500">Commuties name can not be changed after they have been created</Text>
         <Text position="relative" top="28px" left="10px" color="gray.400" width="20px" >r/</Text>
         <Input  position="relative" value={communityName} size="sm" pl="22px" onChange={handleChange}/>
         <Text ml={1} color={charRemainig===0 ? "red" : "gray.500"} fontSize={11}> {charRemainig} Character remainig</Text>
         <Text fontSize="9pt" color="red" pt={1}>{errorMessage}</Text>
         <Text fontSize="9pt" color="green" pt={1}>{success}</Text>
         <Box mt={4} mb={4}>
          <Text fontWeight={600} fontSize={15}>
           Community Type
          </Text>
          <Stack spacing={2}>
             <Checkbox name="public" isChecked={communityType==="public"} onChange={onCommunityTypeChange} >
            <Flex align="center">
              <Icon as ={BsFillPersonFill} color="gray.500" mr={2}/>
                <Text mr={1.5} fontSize={"10pt"}>Public</Text>
              <Text fontSize={"8pt"} color="gray.500" pt={1}>Anyone can view ,post and comment to this community</Text>
            </Flex>
              </Checkbox>
             <Checkbox name="restricted" isChecked={communityType==="restricted"} onChange={onCommunityTypeChange} >
              
                 <Flex align="center">
                   <Icon as ={BsFillEyeFill} color="gray.500" mr={2}/>
                <Text mr={1} fontSize={"10pt"}>Restricted</Text>
              <Text fontSize={"8pt"} color="gray.500" pt={1}>Anyone can view this community, but only approved users can post</Text>
            </Flex></Checkbox>
             <Checkbox name="private" isChecked={communityType==="private"} onChange={onCommunityTypeChange} >
                 <Flex align="center">
                   <Icon as ={HiLockClosed} color="gray.500" mr={2}/>
                <Text mr={1} fontSize={"10pt"}>Private</Text>
              <Text fontSize={"8pt"} color="gray.500" pt={1} >Only approved users can view and submit to this community</Text>
            </Flex>
             </Checkbox>
            
          </Stack>
         </Box>
          </ModalBody>
          </Box>

          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button variant="outline" height="30px" mr={3} colorScheme='blue' mr={3} onClick={handleClose} >
              Cancel
            </Button>
            <Button height="30px" onClick={handleCreateCommunity} isLoading={loading} >Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default CreateCommunityModal