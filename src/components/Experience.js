import { Flex, Container, Heading, Text, Box, Divider } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
    const { ref, inView, } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <Flex ref={ref} alignItems={'center'} w={'100%'}>
            
                    <Box py={'184px'} maxWidth={'430px'}>
                        <Heading fontSize={'48px'} mb={2} as={'h2'}>Recent work experience</Heading>
                        <Text as={'b'} fontSize={'24px'}>Web developer - Fiora</Text>
                        <AnimatePresence>
                            {inView && (
                                <motion.div 
                                initial={{ opacity: 0, width: '0%' }}
                                animate={{ opacity: 1, width: '100%' }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1, delay: 1}}
                                >
                                    <Divider />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Text my={2} fontSize={'16px'}>February 2019 - September 2023 </Text>
                        <Text fontSize={'19px'}>Created and maintained cutting-edge websites and web applications for the agencies various clients. I collaborated closely with the design and project management teams to turn creative visions into functional and user-friendly online experiences.</Text>
                    </Box>
                
        </Flex>
    )
}