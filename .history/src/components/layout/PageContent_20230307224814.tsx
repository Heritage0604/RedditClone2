import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = ({children}) => {
    console.log("here is children" ,children)
  return (
    <Flex justify={"center"} padding={""} border="1px solid red">
        <Flex border="1px solid green">
            {/* left hand side */}
            <Flex border="1px solid blue">{children && children[0 as keyof typeof children]}</Flex>
            {/* right hand side */}
            <Flex border="1px solid orange">{children && children[1 as keyof typeof children]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent