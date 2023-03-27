import {BsMicFill } from "react-icons/bs";
import { Stack,Input,Textarea,Button,Flex,Icon } from '@chakra-ui/react'
import React,{useState} from 'react'

type Props = {}

const AudoInput = () => {
  return (
<Flex direction="column" justify="center" align="center" width="100%">
<Flex justify="center" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
    <Button leftIcon={<BsMicFill />} variant="outline" height="31px" fontSize="18px" onClick={()=>{}}>Upload</Button>
</Flex>
</Flex>
  )
}

export default AudoInput