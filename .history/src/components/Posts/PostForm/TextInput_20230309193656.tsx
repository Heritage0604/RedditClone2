import { Stack,Input,Textarea,Button,Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TextInput = (props: Props) => {
  return (
<Stack spacing={3} width="100%">
<Input/>
<Textarea/>
<Flex pa>
    <Button>Post</Button>
</Flex>
</Stack>
  )
}

export default TextInput