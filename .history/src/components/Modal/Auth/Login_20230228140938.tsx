import { Input } from '@chakra-ui/react'
import React ,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })
  return (
<form>
<Input type="text" name="emmai">

</Input>

</form>
  )
}

export default Login