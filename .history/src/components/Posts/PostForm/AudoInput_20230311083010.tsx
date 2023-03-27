import {BsMicFill } from "react-icons/bs";
import { Stack,Input,Textarea,Button,Flex,Icon } from '@chakra-ui/react'
import React,{useState} from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

type Props = {}

const AudoInput = () => {
  return (
<Flex direction="column" justify="center" align="center" width="100%">
<Flex justify="center" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
    <Button leftIcon={<BsMicFill />} variant="outline" height="31px" onClick={()=>{}}>Upload</Button>
</Flex>
</Flex>
  )
}

export default AudoInput




const ExampleComponent = () => {
  

  return (
    <div>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </div>
  )
}