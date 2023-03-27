import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React ,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })

 const onSubmit=(event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault()
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
<Button type="submit" width={"100%"} height={"36px"} onClick={onSubmit} mb={2}>Log In</Button>

<Flex fontSize="9pt" justifyContent="center">
 <Text mr={1}>New here?</Text>
 <Text color={"blue.500"} fontWeight={700}>SIGN UP</Text>

</Flex>
</form>
  )
}

export default Login