import { Box, CardBody, CardFooter, CardHeader, CardRoot, Flex, Heading, HStack, IconButton, SimpleGrid, Text, Separator } from '@chakra-ui/react'
import React from 'react'
import data from "../../data/db.json"
import { FaEye } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import TabsComponent from './TabsComponent'

const GridComponent = () => {

    // console.log(data.tasks)
  return (
    <SimpleGrid p="20px" columns={4} gap={"10px"} minChildWidth={"300px"} color="black">
        {/* <Box bg="purple.200" h="200px" border="1px solid">
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
        <Box bg="purple.200" h="200px" border="1px solid"></Box> */}

        

            {
                data.tasks && data.tasks.map((taskData, i)=>(
                    <CardRoot key={i} borderBottomWidth={"4px"} borderBottomColor={"purple.400"} bg={{dark:"blue", base:"white"}} color={{__dark:"white", base:"black"}}>
                        <CardHeader>
                            {/* <Text>{taskData.title}</Text>
                             */}

                             <Flex>
                                <Box w="50px" h="50px">
                                    <Text>AV</Text>
                                </Box>
                                <Box>
                                    <Heading as="h3" size="sm">{taskData.title}</Heading>
                                    <Text>by {taskData.author}</Text>
                                </Box>
                             </Flex>
                        </CardHeader>

                           
                        <CardBody>
                            <Text>{taskData.description}</Text>
                        </CardBody>

                        <Separator/>
                        <CardFooter my="2">
                            {/* <Text>Due: {taskData.dueDate}</Text> */}
                            <HStack gap={10}>
                            <IconButton variant={"subtle"} aria-label="Search database" px={2}>
                                 <FaEye fontSize={"6px"}/>
                                <Text>Watch</Text>
                            </IconButton>

                            <IconButton variant={"surface"} aria-label="Search database" px={2}>
                                 <FaPencil fontSize={"6px"}/>
                                <Text>Comment</Text>
                            </IconButton>
                            </HStack>
                        </CardFooter>
                    </CardRoot>
                ))
            }
    </SimpleGrid>
  )
}

export default GridComponent