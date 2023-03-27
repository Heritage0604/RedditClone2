import { authModalState } from '@/atoms/AuthModalAtom'
import { Button } from '@chakra-ui/react'
import React from 'react'
import {useSetRecoilState} from "re"

type Props = {}

const AuthButtons = (props: Props) => {
 const setAuthModalState=useSetRecoilState(authModalState)
  return (
    <div>

     <>
     <Button variant={"outline"} height={"28px"} 
     display={{base:"none",sm:"unset",}} 
     width={{base:"75px",md:"110px"}} 
     mr={2}
     onClick={}>Log In</Button>


     <Button height="28px"
      display={{ base:"none",sm:"unset",}} 
      width={{base:"80px",md:"110px"}} 
      mr={2}>Sign Up</Button>
     
     </>
    </div>
  )
}

export default AuthButtons