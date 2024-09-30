import { Flex, Container, Heading, Text, Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Header() {
    return (
        <div className="flex items-center w-screen h-screen">
            <div className="container mx-auto max-w-6xl px-4 text-white">
                <div className="max-w-lg">
                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-5xl font-display" >Casey van Roose</h1>
                        <h2 className="text-5xl font-display">UX, Design, Develop</h2>
                        <div className="flex mt-2 gap-4" mt={6} gap={'24px'}>
                            <a href="#" className='text-xl font-body'>Skils</a>
                            <a href="#" className='text-xl font-body'>Work Experience</a>
                            <a href="#" className='text-xl font-body'>Contact</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
