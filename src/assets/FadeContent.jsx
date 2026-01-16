import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeContent = ({ 
  children, 
  blur = true, 
  duration = 1.5, 
  // Increased threshold: Element must be 40% visible to trigger
  threshold = 0.4, 
}) => {
  const ref = useRef(null);
  
  // The 'margin' property is key here. 
  // "-200px" creates a buffer at the bottom of the screen.
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: true,
    margin: "0px 0px -200px 0px" 
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 60, // Increased vertical offset for a more dramatic entrance
          filter: blur ? 'blur(6px)' : 'none' 
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,  
          filter: 'blur(0px)' 
        } : { 
          opacity: 0, 
          y: 60,  
          filter: blur ? 'blur(6px)' : 'none' 
        }}
        transition={{ 
          duration: duration, 
          ease: [0.21, 0.47, 0.32, 0.98] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeContent;