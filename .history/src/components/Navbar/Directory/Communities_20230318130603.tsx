import CreateCommunityModal from '@/components/Modal/CreateCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem, Text,Box } from '@chakra-ui/react'
import React,{useState} from 'react'
import { GrAdd } from 'react-icons/gr'
import { communityState } from '@/atoms/CommunityAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

type Props = {}

const Communities:React.FC<Props> = () => {
 const[open,setOpen]=useState(false)
    const mySnippets=useRecoilValue(communityState).mySnippets
  return (
  <>
  
  <CreateCommunityModal open={open} handleClose={()=>setOpen(false)}/>
  <Box mt={3} mb={4}>
    <Text pl={3} mb={11}>
      MY COMMUNITIES
    </Text>
  </Box>
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