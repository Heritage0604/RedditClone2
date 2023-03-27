import { Flex ,Box,Icon} from '@chakra-ui/react'
import React from 'react'
import { BsArrowRightCircle,BsChatDots } from 'react-icons/bs'
import { IoMdVideocam, } from 'react-icons/io'
import {GrAdd} from "react-icons/gr"

type Props = {}

const Icons = (props: Props) => {
  return (
    <Flex>
     <Flex display={{base:"none",md:"flex"}} align="center" borderRight="1px solid" borderColor={"gray.200"}>
<Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} 
_hover={{bg:"gray.200"}}
>
 <Icon as={BsArrowRightCircle} fontSize={20}/>
</Flex>
<Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} 
_hover={{bg:"gray.200"}}
>
 <Icon as={IoMdVideocam} fontSize={22}/>
</Flex>
<Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} 
_hover={{bg:"gray.200"}}
>
 <Icon as={IoMdVideocam} fontSize={22}/>
</Flex>
     </Flex>
     <>
     </>
    </Flex>
  )
}

export default Icons