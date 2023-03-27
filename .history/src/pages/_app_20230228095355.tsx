import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../Chakra/theme"
import Lay

export default function App({ Component, pageProps }: AppProps) {
  return(
   <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
