import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const GridComponent = () => {
  return (
    <SimpleGrid p="20px" columns={4} gap={"10px"} minChildWidth={"250px"}>
        <Box bg="purple.200" h="200px" border="1px solid">
            <Text color={{base: "red", md:"green", sm: "blue", lg:"brown"}}>
                hello
            </Text>
        </Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>

        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>

        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>
        <Box bg="purple.200" h="200px" border="1px solid"></Box>


    </SimpleGrid>
  )
}

export default GridComponent