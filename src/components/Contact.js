import { Flex, Heading, Text, Box } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
    const { ref, inView, } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <Flex justifyContent={'center'} ref={ref} alignItems={'center'} w={'100%'}>
            <Box textAlign={'center'} py={'184px'} maxWidth={'504px'}>
                <Heading fontSize={'48px'} mb={2} as={'h2'}>Git in touch</Heading>
                <Text mb={4} fontSize={'19px'}>If you would like to know more information or want to see some of my recent work please <a className="underline" href='mailto:kcvanroose@gmail.com'>email me</a></Text>
                <AnimatePresence>
                    {inView && (
                        <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1, delay: 1}}
                        >
                        <Flex justifyContent={'center'}>
                            <a href='mailto:kcvanroose@gmail.com'>
                                <FaEnvelope style={{ fontSize: '3rem' }} />
                            </a>
                        </Flex>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>
        </Flex>
    )
}