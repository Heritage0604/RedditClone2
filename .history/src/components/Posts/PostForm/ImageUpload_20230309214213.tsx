import { Flex,Button } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const ImageUpload = (props: Props) => {
  return (
    <Flex justify="center" align="center" width="100%">
<Flex justify>
    <Button>Upload</Button>
</Flex>
    </Flex>
  )
}

export default ImageUpload