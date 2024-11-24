import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@chakra-ui/react'
import React from 'react'

const TabsComponent = () => {
  return (
    <TabsRoot lazyMount unmountOnExit defaultValue="tab-1" p="6" variant={"outline"} >
      <TabsList  >
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -2px 2px gray"}}  color={{base: "black", __dark:"white"}}  value='tab-1'>account</TabsTrigger>
        <TabsTrigger _selected={{fontWeight:"bold", textShadow:"3px -2px 2px gray"}}  color={{base: "black", __dark:"white"}} value='tab-2'>Setting</TabsTrigger>
      </TabsList>

      <TabsContent value='tab-1' color={{base: "black", __dark:"white"}}>
          Account Name
      </TabsContent>

      <TabsContent value='tab-2' color={{base: "black", __dark:"white"}}>
          Setting Name
      </TabsContent>
    </TabsRoot>
  )
}

export default TabsComponent