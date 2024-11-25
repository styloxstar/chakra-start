'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {


  console.log("default system", defaultSystem)
  return (
    <ChakraProvider value={defaultSystem} theme={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
