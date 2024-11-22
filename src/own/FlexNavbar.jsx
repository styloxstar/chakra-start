import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const FlexNavbar = () => {
  return (
    // <Flex bg="gray.200" justify="space-between" wrap={"wrap"} gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" bg="green" flexGrow={1}>3</Box>
    //     <Box w="150px" h="50px" bg="yellow" flexGrow={2}>4</Box>
    // </Flex>

    <Flex as="nav" p="10px" alignItems={"center"} >
        <Heading as="h1">Task</Heading>
        <Spacer/>


    {/* either use gap in flex or use below method */}

        <HStack spaceX={"20px"}>

        <Box bg="gray.200" p="10px">
            M
        </Box>

        <Text color="black">
            gautamd35@gmail.com
        </Text>
        <Button colorPalette="purple">
            Logout
        </Button>
        </HStack>
    </Flex>
  )
}

export default FlexNavbar