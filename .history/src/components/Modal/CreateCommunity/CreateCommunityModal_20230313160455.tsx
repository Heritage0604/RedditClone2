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
