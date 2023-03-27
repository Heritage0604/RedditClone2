import React from 'react'

type Props = {
    textInputs:{
        title:string
        body:string
    }
    onChange:(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>void
    handleCreatePost:()=>void;
    loading:boolean;
}

const LinkInput = (props: Props) => {
  return (
    <div>LinkInput</div>
  )
}

export default LinkInput