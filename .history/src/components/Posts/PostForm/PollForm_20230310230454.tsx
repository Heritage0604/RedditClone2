import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PollForm:React.FC<Props> = () => {
  return (
   <Stack spacing={3} width="100%">
<Input
name="title" 
// value={ linkInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Title"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
<Textarea
name="body" 
// value={ linkInputs.body}  onChange={onChange}
fontSize={"10pt"}
height="100px"
borderRadius={4}
placeholder="Text(optional)"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}/>

<Flex width="60%" direction="column" spacing={2}>
    <Input
name="title" 
// value={textInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Option 1"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
    <Input
name="title" 
// value={textInputs.title} onChange={onChange}
fontSize={"10pt"}
borderRadius={4}
placeholder="Option 2"
_placeholder={{color:"gray.500"}}
_focus={{outline:"none",bg:"white",border:"1px solid black"}}
/>
</Flex>
</Stack>
  )
}

export default PollForm