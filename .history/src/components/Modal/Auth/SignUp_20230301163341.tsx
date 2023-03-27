import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React ,{useState} from 'react'
import {useSetRecoilState} from "recoil"
import { authModalState } from '@/atoms/AuthModalAtom'
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth" 
import {auth} from "../../../firebase/ClientApp"


const SignUp = () => {

     const [signupform,setSignUpform]=useState({
  email:"",
  password:"",
  comfirmpassword:"",
 })
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
 const setAuthModalState=useSetRecoilState(authModalState)

 const onSubmit=(event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(si)
 }
 const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault()
  setSignUpform(prev=>({
   ...prev,[event.target.name]:event.target.value
  }))
 }
  return (
<form autoComplete='off'>
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
<Input required type="password" name="password" placeholder='password' mb={5} onChange={onChange}/>
<Input required type="password" name="confirmpassword" placeholder='confirm password' mb={5} onChange={onChange}/>
<Button type="submit" width={"100%"} height={"36px"} onClick={onSubmit} mb={3}>Sign Up</Button>

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