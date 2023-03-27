import { Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react'
import React ,{useState} from 'react'
import {useSetRecoilState} from "recoil"
import { authModalState } from '@/atoms/AuthModalAtom'
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth" 
import {auth} from "../../../firebase/ClientApp"
import {FIREBASE_ERRORS} from "../../../firebase/errors"
import { SearchIcon } from '@chakra-ui/icons'


const SignUp = () => {

     const [signupform,setSignUpform]=useState({
  email:"",
  password:"",
  confirmpassword:"",
 })
 const[error,setError]=useState("")
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
 const setAuthModalState=useSetRecoilState(authModalState)

// submit and signup user account in firebase
 const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    if (error) setError("")
    if( signupform.password !== signupform.confirmpassword ){
 
 setError("Passwords do not match")
 return
    }
   createUserWithEmailAndPassword(signupform.email,signupform.password)
   
 }
//change function  
 const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault()
  setSignUpform(prev=>({
   ...prev,[event.target.name]:event.target.value
  }))
 }
  return (
<form autoComplete='off' onSubmit={onSubmit}>
<Input required type="email" name="email" placeholder='email'
 mb={2} onChange={onChange} 
 fontSize={"10pt"}
 _placeholder={{color:"gray.500"}}
  _hover={{
 bg:"white",
 borderColor:"blue.500",
 border:"1px solid"}}
 _focus={{
 outline:"none",
 bg:"white",
 borderColor:"blue.500",
 border:"1px solid"}}
 bg="gray.50"/>

<InputGroup>

<Input required type="password" name="password" placeholder='password' mb={5} onChange={onChange}/>
</InputGroup>

<InputGroup>
<Input required type="password" name="confirmpassword" placeholder='confirm password' mb={5} onChange={onChange}/>
</InputGroup>
{(error || userError )&& (
  <Text textAlign={"center"} color="red" fontSize={"10pt"} mb={2}>{error || FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]}</Text>
)}
<Button type="submit" width={"100%"} height={"36px"}  mb={3} isLoading={loading}>Sign Up</Button>

<Flex fontSize="9pt" justifyContent="center">
 <Text mr={2}>Already have an account?</Text>
 <Text color={"blue.500"} cursor={"pointer"} fontWeight={700}
 onClick={()=>setAuthModalState({open:true,view:"login"})}>
  LOG IN</Text>

</Flex>
</form>
  )
}


export default SignUp