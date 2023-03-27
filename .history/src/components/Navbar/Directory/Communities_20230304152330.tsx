import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, MenuItem } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Communities:React.FC<Props> = () => {
  return (
  <>
  
  <CreateCommunityModal/>
  <MenuItem>
  <Flex>

  </Flex>
  
  </MenuItem>

  </>
  )
}

export default Communities