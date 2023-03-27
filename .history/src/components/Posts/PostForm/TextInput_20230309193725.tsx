import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TextInput = (props: Props) => {
  return (
<Stack spacing={3} width="100%">
<Input
name="title"
/>
<Textarea/>
<Flex p={'4px'}>
    <Button>Post</Button>
</Flex>
</Stack>
  )
}

export default TextInput