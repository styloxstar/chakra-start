import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@chakra-ui/react'
import React from 'react'

const TabsComponent = () => {
  return (
    <TabsRoot>
      <TabsList>
        <TabsTrigger __selected={{ bg: 'purple.400'}} value='tab-1'>account</TabsTrigger>

      </TabsList>

      <TabsList>
        <TabsTrigger __selected={{ bg: 'purple.400'}} value='tab-2'>Setting</TabsTrigger>

      </TabsList>

      <TabsContent value='tab1'>
          Account Name

      </TabsContent>

      <TabsContent value='tab2'>
          Setting Name

      </TabsContent>
    </TabsRoot>
  )
}

export default TabsComponent