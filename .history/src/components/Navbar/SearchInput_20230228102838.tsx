import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

type Props = {}
React
const SearchInput = (props: Props) => {
  return (
    <Flex>
     <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Search R' />
  </InputGroup>

 
    </Flex>
  )
}

export default SearchInput