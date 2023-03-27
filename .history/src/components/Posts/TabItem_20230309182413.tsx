import React from 'react'
import { Tabitem } from './NewPostForm'

type Props = {
    item:Tabitem;
}

const TabItem:React.Fc<Props> = ({item}) => {
  return (
    <div>TabItem</div>
  )
}

export default TabItem