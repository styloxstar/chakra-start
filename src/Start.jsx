import React from 'react'
import { Button } from "./components/ui/button"
import { HStack, VStack } from '@chakra-ui/react'


const Start = () => {
  return (
    <>
    <HStack>
      <Button onClick={()=> alert("hey ther")} bg={{ base: "white", _dark: "black" }} color={{ base: "black", _dark: "white" }}>Click me</Button>
      <Button>Click me</Button>
    </HStack>

    <VStack>
    <Button onClick={()=> alert("hey ther")}>Click me</Button>
    <Button>Click me</Button>
    </VStack>
    </>
  )
}

export default Start