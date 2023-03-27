import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { User } from 'firebase/auth'
import {F}

type Props = {
 user?:User |null
}

const UserMenu :React.Fc<Props>=({user}) => {
  return (
   <Menu>
  <MenuButton>
  {user ?
  ( <div>user</div>): <div>no user</div>
 }
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  )
}

export default UserMenu