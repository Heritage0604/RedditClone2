import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import React from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

const Communities:React.FC<Props> = () => {
  return (
  <>
  
  <CreateCommunityModal/>
  <MenuItem>
  <Flex align="center">
<Icon as={GrAdd} mr={2}/>
<Text>Create Community</Text>
  </Flex>
  
  </MenuItem>

  </>
  )
}

export default Communities