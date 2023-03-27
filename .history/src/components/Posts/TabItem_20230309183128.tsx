import React from 'react'
import { Tabitem } from './NewPostForm'

type Props = {
    item:Tabitem;
    selected:boolean
}

const TabItem:React.FC<Props> = ({item,selected}) => {
  return (
    <div>{item.title}</div>
  )
}

export default TabItem