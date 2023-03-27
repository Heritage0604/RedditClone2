import React from 'react'
import { IconType } from 'react-icons/lib'
import { Flex, Icon, MenuItem, Image } from "@chakra-ui/react";
type Props = {
    displayText:string
    link:string
    icon:IconType
    iconColor:string
    imageURL?:string
}

const MenuListItem:React.FC<Props> = ({displayText,link,icon,iconColor,imageURL}) => {
  return (
   <MenuItem
  )
}

export default MenuListItem