import { Box, Container, Heading, Text} from '@chakra-ui/react'
import React from 'react'



const Basics = () => {

const boxStyles = {
    p: "10px",
    bg: "red",
    color: "white",
    m: "10px",
    textAlign: "center",
    ':hover':{
        color: "white",
        bg: "blue.700",
        cursor: "pointer",
        fontWeight: "bold"
    }
}


  return (
    <>

        <Container mt={2} as="section" maxW={"4xl"} py="20px">

        <Heading my="30px" p="10px">Chakra UI BAsics</Heading>
        <Text marginLeft="10px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero at possimus deleniti ratione excepturi sit dolorem?</Text>
        <Text my="10" ml="10px" color="blue.700" fontWeight={"bold"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum hic, quidem iusto dolorem molestiae iure veritatis rem animi laboriosam voluptas!
        </Text>
        
        <Box my="30px" p="10px" bg={ "purple.300"} textAlign={"center"}>
            <Text>This is a box</Text>
        </Box>


        <Box sx={boxStyles}>
            <Text>Hello</Text>
        </Box>

        </Container>
        
    </>
  )
}

export default Basics