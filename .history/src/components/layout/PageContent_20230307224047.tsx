import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = ({children}) => {
    console.log(children)
  return (
    <Flex>
        <Flex>
            {/* left hand side */}
            <Flex></Flex>
            {/* right hand side */}
            <Flex></Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent