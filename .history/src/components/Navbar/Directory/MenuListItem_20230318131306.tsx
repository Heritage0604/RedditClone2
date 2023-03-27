import React from 'react'
import { IconType } from 'react-icons/lib'

type Props = {
    displayText:string
    link:string
    icon:IconType
    iconColor:string
    imageURL?:sring
}

const MenuListItem:React.FC<Props> = ({displayText,link,icon,iconColor,im}) => {
  return (
    <div>MenuListItem</div>
  )
}

export default MenuListItem