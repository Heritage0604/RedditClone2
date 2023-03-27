import React from 'react'
import { Tabitem } from './NewPostForm'
import { Flex } from '@chakra-ui/react';

type Props = {
    item:Tabitem;
    selected:boolean
}

const TabItem:React.FC<Props> = ({item,selected}) => {
  return (
    
    <Flex>
<Flex></Flex>
    </Flex>
  )
}

export default TabItem