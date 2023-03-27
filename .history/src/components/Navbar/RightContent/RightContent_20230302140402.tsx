import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'


type Props = {
  user:any;
}

const RightContent:React.FC<Right = (props: Props) => {
  return (
    <>
    <AuthModal/>
    <Flex justify={"center"} align={"center"}>
     {Prop.? <div>There is  a User </div> : <AuthButtons/> }
    </Flex>
    </>
  )
}

export default RightContent