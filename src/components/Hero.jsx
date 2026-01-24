import React from 'react'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
            <motion.h1 className="main-heading"
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.3,}}
                viewport={{once:true}}>
              From idea to impact, faster than ever
           </motion.h1>
            <motion.p className="txt-19"
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay:0.6,}}
               viewport={{once:true}}>
              Design, develop, and modernize with AI, cloud, and data at the core
            </motion.p>
             <div className="hero-ctas " >
                <motion.button className="btn outline prim-bluebg white txt-19"             
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:0.9,}}
                viewport={{once:true}}>
                Reach us
              </motion.button>
              </div>
        </div>
          <div className="hero-media ">
           <motion.img initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:1.2,}}
                 viewport={{once:true}}
                src="https://res.cloudinary.com/dra2qc1c7/image/upload/v1767868395/dxkqanotstxehm17cio4.png" alt="team" />
          </div> 
      </div>
    </section>
  )
}
