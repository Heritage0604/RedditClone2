import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const AuthButtons = (props: Props) => {
  return (
    <div>

     <>
     <Button variant={"outline"} height={"28px"} display={{
      base:"none",sm:"unset",
     }} width={{base:"70px",md:"110px"}} mr={2}>Log In</Button>
     <Button height="28px">Sign Up</Button>
     
     </>
    </div>
  )
}

export default AuthButtons