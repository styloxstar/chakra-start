import { Button, DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from '@chakra-ui/react'
import React from 'react'

const DialogModal = () => {
  return (
    <DialogRoot size="md" placement="center" motionPreset="slide-in-bottom" closeOnInteractOutside={false}>
    <DialogTrigger asChild >
      <Button variant="outline" size="sm">
        Open Dialog
      </Button>
    </DialogTrigger>
    <DialogContent backdrop={false}>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
      </DialogHeader>
      <DialogBody>
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
  )
}

export default DialogModal