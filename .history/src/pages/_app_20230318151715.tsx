import type { AppProps } from 'next/app'
import { ChakraProvider,Box } from '@chakra-ui/react'
import {theme} from "../Chakra/theme"
import Layout from "../components/layout/Layout"
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
    <RecoilRoot>
   <ChakraProvider theme={theme}>
    <Box></Box>
      <Layout/>
      <Component {...pageProps} />
    
    </ChakraProvider>
    </RecoilRoot>
    </>
  )
}
