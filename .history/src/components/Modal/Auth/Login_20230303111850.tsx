import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React ,{useState} from 'react'
import {useSetRecoilState} from "recoil"
import { authModalState } from '@/atoms/AuthModalAtom'
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth" 
import {auth} from "../../../firebase/ClientApp"
import {FIREBASE_ERRORS} from "../../../firebase/errors"
type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })

const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);


 const setAuthModalState=useSetRecoilState(authModalState)

 const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    signInWithEmailAndPassword(loginform.email, loginform.password)
 }
 const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault()
  setLoginform(prev=>({
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

  <Text textAlign={"center"} color="red" fontSize={"10pt"} mb={2}>{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</Text>


<Button type="submit" width={"100%"} height={"36px"} onClick={onSubmit} isLoading={loading} mb={3}>Log In</Button>

<Flex>
  <Text>Forgot Password?</Text>
  <Text>Fo</Text>
</Flex>

<Flex fontSize="9pt" justifyContent="center">
 <Text mr={1}>New here?</Text>
 <Text color={"blue.500"} cursor={"pointer"} fontWeight={700}
 onClick={()=>setAuthModalState({open:true,view:"signup"})}>
  SIGN UP</Text>

</Flex>
</form>
  )
}

export default Login