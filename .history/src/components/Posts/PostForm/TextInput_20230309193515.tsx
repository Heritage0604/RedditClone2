import { Stack,Input,TextArea } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const TextInput = (props: Props) => {
  return (
<Stack spacing={3} width="100%">
<Input/>
<Textarea/>
</Stack>
  )
}

export default TextInput