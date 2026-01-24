import { motion } from 'framer-motion'

const HeroSection = (props) =>{
    const {title ,description,btncontent, imgsrc} = props
    return(
        <section className="hero-section">
        <div className="hero-content">
          <motion.h1 className="main-heading fade-up"
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:0.5}}
            viewport={{once:true}}>{title}</motion.h1>
          <motion.p className="hero-description txt-19"
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1}}
            viewport={{once:true}}>
            {description}
          </motion.p>
          <motion.button className="btn-primary fade-up"
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5}}
            viewport={{once:true}}>{btncontent}</motion.button>
        </div>
        <motion.div className="hero-image-placeholder"
          initial={{ opacity: 0, y:50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2}}
          viewport={{once:true}}>
          <img className="hero-image fade-up" src={imgsrc} alt='yokesh' />
        </motion.div>
      </section>
    )
}
export default HeroSection;