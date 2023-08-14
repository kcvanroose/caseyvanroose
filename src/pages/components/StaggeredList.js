import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const StaggeredList = ({list}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    const itemVariants = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3, 
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
        <div className='flex gap-2 md:gap-4'>
        {list.map((item, index) => (
          <motion.div key={index} custom={index} initial="hidden" animate={controls} variants={itemVariants}>
            <p  className='text-base md:text-xl my-2 font-body'>{item}</p>
          </motion.div>
        ))}
        </div>
      </motion.ul>
    );
  };
  
  export default StaggeredList;
  