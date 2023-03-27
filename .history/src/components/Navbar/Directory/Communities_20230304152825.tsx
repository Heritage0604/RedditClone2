import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import React from 'react'
import{GrAdd}

type Props = {}

const Communities:React.FC<Props> = () => {
  return (
  <>
  
  <CreateCommunityModal/>
  <MenuItem>
  <Flex>
<Icon/>
  </Flex>
  
  </MenuItem>

  </>
  )
}

export default Communities