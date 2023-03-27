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
    <Box width="110%" bg="orange.500">Hello
      <Layout/>
      <Component {...pageProps} />
</Box>
    </ChakraProvider>
    </RecoilRoot>
    </>
  )
}
