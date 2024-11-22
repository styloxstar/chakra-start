import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import FlexNavbar from './FlexNavbar'
import GridComponent from './GridComponent'

const MainGrid = () => {
  return (
    <Grid templateColumns={"repeat(6,1fr)"} bg="gray.50">
      <GridItem 
        as="aside" 
        colSpan={1} 
        bg="purple.400" 
        minH={"100vh"} 
        p="30px"
        >
        <Text color="black">Sidebar</Text>
      </GridItem>

      <GridItem
        as="main"
        colSpan={5}
      >
        <FlexNavbar />
        <GridComponent />
      </GridItem>
    </Grid>
  );
}

export default MainGrid