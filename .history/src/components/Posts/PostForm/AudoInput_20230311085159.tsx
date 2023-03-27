import {BsMicFill } from "react-icons/bs";
import { Stack,Input,Textarea,Button,Flex,Icon } from '@chakra-ui/react'
import React,{useState} from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

type Props = {}

const AudoInput = () => {
    const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    // document.body.appendChild(audio);
  };

  return (
<Flex direction="column" justify="center" align="center" width="100%">
<Flex justify="center" align="center" border="1px dashed gray.200" borderRadius={4} width="100%" p={20}>
 <AudioRecorder
 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}

      />
    <Button leftIcon={<BsMicFill />} variant="outline" height="31px" onClick={()=>{}}>Upload</Button>
</Flex>
      <button onClick={recorderControls.stopRecording}>{ recorderControls.isRec ?"Stop recording" :"Start recording"}</button>
</Flex>
  )
}

export default AudoInput




