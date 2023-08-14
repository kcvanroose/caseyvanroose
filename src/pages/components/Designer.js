import { Flex, Container, Heading, Text, Box } from "@chakra-ui/react"
import Languages from './Languages'
import Tools from "./Tools"

export default function Designer() {
   

    return (
        <Flex alignItems={'center'} w={'100%'}>
            <Container maxWidth={'1000px'} color={'#F9FBFD'}>
              <Box py={'184px'}>
                  <Heading fontSize={'48px'} mb={4} as={'h2'}>Designer</Heading>
                  <Text fontSize={'19px'} maxWidth={'430px'} mb={4}>I like to design clean and focused user interfaces. Great user experience begins with simplicity and clarity. By utilising established design patterns, I strive to create apps and websites that make navigation intuitive and interactions enjoyable.</Text>
                  <Text fontSize={'19px'} mb={2} as={'b'} className="bold">Design skills</Text>
                  <Box mb={4}>
                    <Languages />
                  </Box>
                  <Text fontSize={'19px'}  mb={2} as={'b'}>Tools</Text>
                  <Tools/>
              </Box>
            </Container>
        </Flex>
    )
}