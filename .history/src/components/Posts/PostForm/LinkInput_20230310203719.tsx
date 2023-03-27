import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    linkInputs:{
        title:string
        body:string
    }
    onChange:(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>void
 
}

const LinkInput:React.FC<Props> = ({ linkInputs,onChange}) => {
  return (
  <Stack spacing={3} width="100%">
<Input
name="title" 
value={linkInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Title"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
<Textarea
name="body" 
value={linkInputs.body}  onChange={onChange}
fontSize={"10pt"}
height="100px"
borderRadius={4}
placeholder="URL"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}/>

</Stack>
  )
}

export default LinkInput