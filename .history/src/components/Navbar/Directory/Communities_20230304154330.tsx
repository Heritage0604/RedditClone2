import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

const Communities:React.FC<Props> = () => {
 const[open,setOpen]=useState(false)
  return (
  <>
  
  <CreateCommunityModal open={open} handleClose={()=>setOpen{}}/>
  <MenuItem width="100%" fontSize="10pt" _hover={{bg:"gray.100"}} onClick={()=>setOpen(true)}>
  <Flex align="center">
<Icon as={GrAdd} mr={2} fontSize={20}/>
<Text>Create Community</Text>
  </Flex>
  
  </MenuItem>

  </>
  )
}

export default Communities