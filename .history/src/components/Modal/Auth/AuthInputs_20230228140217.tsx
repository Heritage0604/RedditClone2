import { authModalState } from '@/atoms/AuthModalAtom'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import {useRecoilValue}

type Props = {}

const AuthInputs = (props: Props) => {
 const modalState=useRecoilValue(authModalState)
  return (
  <Flex direction="column" align="center" width="100%" mt={4}>

  </Flex>
  )
}

export default AuthInputs