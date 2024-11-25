import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@chakra-ui/react'
import React from 'react'
import AccordionComponent from './AccordionComponent'
import DialogModal from './DialogModal'
import FlexNavbar from './FlexNavbar'
import GridComponent from './GridComponent'
import StepComponent from './StepComponent'
import Forms from './Forms'

const TabsComponent = () => {
  return (
    <TabsRoot lazyMount unmountOnExit defaultValue="tab-1" p="6" variant={"outline"} >
      <TabsList  >
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -1px 6px gray"}}  color={{base: "black", __dark:"white"}} value='tab-1'>Navbar And Grid</TabsTrigger>
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -1px 6px gray"}}  color={{base: "black", __dark:"white"}}  value='tab-2'>Accordion</TabsTrigger>
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -1px 6px gray"}}  color={{base: "black", __dark:"white"}} value='tab-3'>Dialog Modal</TabsTrigger>
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -1px 6px gray"}}  color={{base: "black", __dark:"white"}} value='tab-4'>Forms</TabsTrigger>

      </TabsList>

      <TabsContent value='tab-1' color={{base: "black", __dark:"white"}}>
      <FlexNavbar />
      <GridComponent />
      </TabsContent>

      <TabsContent value='tab-2' color={{base: "black", __dark:"white"}}>
      <AccordionComponent/>
      </TabsContent>

      <TabsContent value='tab-3' color={{base: "black", __dark:"white"}}>
       <DialogModal/>
       <StepComponent/>
      </TabsContent>

      <TabsContent value='tab-4' color={{base: "black", __dark:"white"}}>
       <Forms/>
      </TabsContent>


    </TabsRoot>
  )
}

export default TabsComponent