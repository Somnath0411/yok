import './LearnPage.css'
import { motion } from 'framer-motion'
const LearnHeader= () => {
    return (
      <motion.section className="learn-header-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}>
        <motion.div className="learn-header-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.3 }}
          viewport={{ once: true }}>
          <motion.h1 className="sample main-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>Practical <span className='prim-blue'>Learning</span> for Tech <span className='prim-blue'>Careers</span></motion.h1>
          <motion.p className='txt-19'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}>Industry focused courses designed for real world development and cloud roles. Learn through practical training and hands-on projects</motion.p>
          <motion.button className="learn-explore-btn white txt-19"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}>Explore</motion.button>
        </motion.div>
      </motion.section>
    )
}
export default LearnHeader;