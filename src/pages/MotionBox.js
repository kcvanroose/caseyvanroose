import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function BoxWithAnimation() {
  return (
    <MotionBox
      w={100}
      h={100}
      bg="blue.400"
      borderRadius="md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}
