import arrow from '../../assets/arrow.jsx';
import ApplicationModal from '../../assets/EmailSend.jsx';
import { motion } from 'framer-motion';

const JobCard = (props)=>{
 const {img, title, type, link,variants} = props
 return(
  <motion.div className="job-card" variants={variants}>
    <div className="job-card-image-wrapper">
      <img className="job-card-image" src={img} alt="" />
      </div>
    <div className="job-card-description">
        <div className="job-description-content">
          <h3 className="txt-23">{title}</h3>
          <p className="txt-19">{type}</p>
        </div>
        <div className="job-card-apply">
        <ApplicationModal role={title} classname="job-card-apply-link txt-19"/>
        <p>{arrow()}</p>
        </div>
    </div>
  </motion.div>
 )
}
export default JobCard;