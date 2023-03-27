import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = (props: Props) => {
  return (
    <Flex>
        <Flex>
            {/* lefthandside */}
            <Flex></Flex>
            // 
            <Flex></Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent