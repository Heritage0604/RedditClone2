import { authModalState } from '@/atoms/AuthModalAtom'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import {useRecoilValue} from "recoil"

type Props = {}

const AuthInputs = (props: Props) => {
 const modalState=useRecoilValue(authModalState)
  return (
  <Flex direction="column" align="center" width="100%" mt={4}>
{modalState.view==="login" && <Login/>}
{modalState.view==="login" && <Lo/>}
  </Flex>
  )
}

export default AuthInputs