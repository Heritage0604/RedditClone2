import { Button, Input } from '@chakra-ui/react'
import React ,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })

 const onSubmit=()=>{}
 const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault()
  setLoginform(prev=>({
   ...prev,[event.target.name]:event.target.value
  }))
 }
  return (
<form autoComplete='off'>
<Input type="email" name="email" placeholder='email' mb={2} onChange={onChange}/>
<Input type="password" name="password" placeholder='password' mb={2} onChange={onChange}/>
<Button type="submit" width={}>Log IN</Button>


</form>
  )
}

export default Login