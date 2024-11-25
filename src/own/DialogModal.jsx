import { Button, DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const DialogModal = () => {
  return (

    <VStack>
    <Heading py={"10px"}>Modal as Dialog</Heading>
    <DialogRoot size="md" placement="center" motionPreset="slide-in-bottom" closeOnInteractOutside={false} >
    <DialogTrigger asChild >
      <Button variant="outline" size="sm" colorPalette={"purple"}>
        Open Dialog
      </Button>
    </DialogTrigger>
    <DialogContent bg={{base:"purple.800", _dark:"purple.900"}} backdrop={false} color={{base:"black", _dark:"white"}}>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
      </DialogHeader>
      <DialogBody >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DialogBody>
      <DialogFooter>
        <DialogActionTrigger asChild>
          <Button variant="outline">Cancel</Button>
        </DialogActionTrigger>
        <Button>Save</Button>
      </DialogFooter>
      <DialogCloseTrigger />
    </DialogContent>
  </DialogRoot>
    </VStack>
  )
}

export default DialogModal