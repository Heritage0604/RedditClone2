import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    textInputs:{
        title:string
        body:string
    }
    onChange:(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>void
    handleCreatePost:()=>void;
    loading:boolean;
}

const LinkInput = (props: Props) => {
  return (
  
  )
}

export default LinkInput