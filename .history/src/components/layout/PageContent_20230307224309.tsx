import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = ({children:ch}) => {
    console.log("here is children" ,children)
  return (
    <Flex>
        <Flex>
            {/* left hand side */}
            <Flex>{children[0]}</Flex>
            {/* right hand side */}
            <Flex>{children[1]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent