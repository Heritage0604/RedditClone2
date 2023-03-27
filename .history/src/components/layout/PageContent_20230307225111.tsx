import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const PageContent:React.FC<Props> = ({children}) => {
    console.log("here is children" ,children)
  return (
    <Flex justify={"center"} padding={"16px 0px"} border="1px solid red">
        <Flex width="95%" justify="center" maxWidth={"860px"} border="1px solid green">
            {/* left hand side */}
            <Flex border="1px solid blue" width={{base:"100%",md:"65%"}} mr={{base:0,md:6}}>{children && children[0 as keyof typeof children]}</Flex>
            {/* right hand side */}
            <Flex border="1px solid orange" width="30%">{children && children[1 as keyof typeof children]}</Flex>
        </Flex>
    </Flex>
  )
}

export default PageContent