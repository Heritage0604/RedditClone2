import { Community } from '@/atoms/CommunityAtom'
import { Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
    communityData:Community
}

const Header:React.FC<Props> = ({communityData}) => {
  return (
    <Flex direction="column"></Flex>
  )
}

export default Header