import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeContent = ({ 
  children, 
  blur = true, 
  duration = 1.5, 
  threshold = 0.2,
  initialScale = 0.9 // Slightly increased scale for a more subtle "up-scale"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 40, 
          scale: initialScale, 
          // Reduced blur from 10px to 5px for a cleaner look
          filter: blur ? 'blur(3px)' : 'none' 
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: 'blur(0px)' 
        } : { 
          opacity: 0, 
          y: 40, 
          scale: initialScale, 
          filter: blur ? 'blur(3px)' : 'none' 
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