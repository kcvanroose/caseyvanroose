import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flex, Text } from '@chakra-ui/react';

const Languages = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
  
    const items = ['HTML', 'CSS', 'SASS', 'JavaScript', 'Ruby', 'PHP'];
  
    // Staggered animation settings
    const itemVariants = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3, // Adjust the delay here for the desired stagger effect
        },
      }),
    };
  
    React.useEffect(() => {
      if (inView) {
        controls.start((i) => 'visible');
      }
    }, [controls, inView]);
  
    return (
      <motion.ul ref={ref}>
        <Flex gap={4}>
        {items.map((item, index) => (
          <motion.div key={index} custom={index} initial="hidden" animate={controls} variants={itemVariants}>
            <Text fontSize={'19px'}>{item}</Text>
          </motion.div>
        ))}
        </Flex>
      </motion.ul>
    );
  };
  
  export default Languages;
  