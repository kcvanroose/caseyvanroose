import { Flex, Container, Heading, Text, Box } from "@chakra-ui/react"
import Languages from './Languages'
import Tools from "./Tools"

export default function Developer() {
   

    return (
        <Flex alignItems={'center'} w={'100%'}>
            <Container maxWidth={'1000px'} color={'#F9FBFD'}>
              <Box py={'184px'}>
                  <Heading fontSize={'48px'} mb={4} as={'h2'}>Web developer</Heading>
                  <Text fontSize={'19px'} maxWidth={'430px'} mb={4}>My passion lies in crafting aesthetically pleasing and highly functional apps and websites. With a diverse skill set that encompasses various languages and tools, I  believe in selecting the best tech for the job.</Text>
                  <Text fontSize={'19px'} mb={2} as={'b'} className="bold">Languages</Text>
                  <Box mb={4}>
                    <Languages />
                  </Box>
                  <Text fontSize={'19px'} mb={2} as={'b'}>Tools</Text>
                  <Tools/>
              </Box>
            </Container>
        </Flex>
    )
}