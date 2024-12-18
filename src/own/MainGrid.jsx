import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import FlexNavbar from './FlexNavbar'
import GridComponent from './GridComponent'
import Sidebar from './Sidebar'
import TabsComponent from './TabsComponent'
import AccordionComponent from './AccordionComponent'
import DialogModal from './DialogModal'
import StepComponent from './StepComponent'

const MainGrid = () => {
  return (
    <Grid templateColumns={"repeat(6,1fr)"} bg="gray.50">
      <GridItem 
        as="aside" 
        colSpan={{base:6, lg:2, xl:1}} 
        bg="purple.400" 
        minH={{lg:"100vh"}} 
        p={{base:"20px", lg: "30px"}}
        >
        {/* <Text color="black">Sidebar</Text>
         */}

         <Sidebar/>
      </GridItem>

      <GridItem
        as="main"
        colSpan={{base:6, lg:4, xl:5}} 
      >

      <TabsComponent/>

      {/* <AccordionComponent/> */}
      {/* <DialogModal/> */}
        
      {/* its important to use step component from local snippet by installing them */}
      {/* <StepComponent/>   */}
        {/* <FlexNavbar />
        <GridComponent /> */}
      </GridItem>
    </Grid>
  );
}

export default MainGrid