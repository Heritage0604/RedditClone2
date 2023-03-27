import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React from 'react'

type Props = {
  user:User
}
React
const SearchInput:React.FC<Props> = ({user}) => {
  return (
    <Flex flexGrow={1} maxWidth={user? } mr={2} align={"center"}>
     <InputGroup ml={2}>

    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.400'  mb={1} />}
    />
    <Input placeholder='Search Reddit' fontSize={"10pt"} _placeholder={{color:"gray.500"}}
    _hover={{
     bg:"white",
     border:"1px solid",
     borderColor:"blue.500"
    }}
    _focus={{
     outliine:"none",
     border:"1px solid",
     borderColor:"blue.500",
    }} 
    height={"34px"}
    bg="gray.50"/>
  </InputGroup>

 
    </Flex>
  )
}

export default SearchInput