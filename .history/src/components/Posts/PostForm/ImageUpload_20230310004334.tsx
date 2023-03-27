import { Flex,Button, Image,Stack } from '@chakra-ui/react'
import React,{useRef} from 'react'

type Props = {
  selectedFile?:string
    onSelectImage:(event:React.ChangeEvent<HTMLInputElement>)=>void
    setSelectedTab:(value:string)=>void
    setSelectedFile:(value:string)=>void
}

const ImageUpload:React.FC<Props> = ({selectedFile,onSelectImage,setSelectedTab,setSelectedFile}) => {
const selectedFileRef=useRef<HTMLInputElement>(null)
  return (
    <Flex directional="column" justify="center" align="center" width="100%">
{selectedFile ? (<>
<Image src={selectedFile} maxWidth={"400px"} maxHeight={"400px"}/>
<Stack>
    <Button height="28px" onClick={()=>setSelectedTab("Post")} >Back To Post</Button>
    <Button>Remove</Button>
</Stack>

</>) :(<Flex justify="center" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
    <Button variant="outline" height="28px" onClick={()=>selectedFileRef?.current.click()}>Upload</Button>
    <input type="file" ref={selectedFileRef} hidden accept="video/*,image/*" 
     onChange={onSelectImage}
    />
   
</Flex>)}
    </Flex>
  )
}

export default ImageUpload