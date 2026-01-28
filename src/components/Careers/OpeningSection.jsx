import JobCard from './JobCard'
import { motion } from 'framer-motion'
import './Careers.css'
const OpeningSection = () => {
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
      viewport: { once: true, whileInView: true},
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

const roles = [
    {
        designation: 'SEO',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Optimize website content and architecture to improve organic rankings and drive high-quality traffic through keyword research and technical SEO.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation: 'Digital Marketing',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Develop and execute comprehensive online marketing strategies across paid search, email, and display channels to increase brand awareness and conversion.",
        img: "https://res.cloudinary.com/drzttwcyz/image/upload/v1768570267/photo-1563986768494-4dee2763ff3f_ascpp0.avif"
    },
    {
        designation: 'Video Editing',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Transform raw footage into high-impact visual stories, managing the full post-production process including color grading, sound design, and motion graphics.",
        img: "https://res.cloudinary.com/drzttwcyz/image/upload/v1768570043/photo-1530712024539-ecd73dfb1c9d_ntihvk.avif"
    },
    {
        designation: 'Social Media Handler',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Curate engaging content calendars, manage community interactions, and analyze performance metrics across all social platforms to build a loyal audience.",
        img: "https://res.cloudinary.com/drzttwcyz/image/upload/v1768570418/photo-1611926653458-09294b3142bf_oojyyh.avif"
    },
    {
        designation: 'Developer',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Build and maintain scalable web applications, ensuring high performance, responsiveness, and seamless integration between front-end and back-end systems.",
        img: "https://res.cloudinary.com/drzttwcyz/image/upload/v1768569869/photo-1498050108023-c5249f4df085_silxm7.avif"
    },
    {
        designation: 'Designer',
        jobType: 'Remote: Fulltime',
        link: "Apply",
        Description: "Create visually stunning digital assets and user-centric layouts that align with brand identity and provide an intuitive experience for our users.",
        img: "https://res.cloudinary.com/drzttwcyz/image/upload/v1768569727/photo-1626785774573-4b799315345d_ug4r2s.avif"
    },
];
   return (
    <>
      <motion.div className="opening-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <motion.div className="opening-section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
            
            <pre>Jobs</pre>
            <h2 className="main-heading">Open Roles</h2>
            <p className="txt-19">Be part of meaningful projects with people who value clear thinking and collaboration.</p>
        </motion.div>
        <motion.div className="job-card-cont" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: "some", margin: "0px 0px -50px 0px" }}>
           {
           roles.map((job)=>
             <JobCard key={job.designation} img={job.img} title={job.designation} type={job.jobType} link={job.link} Description={job.Description} variants={cardVariants}/>
            )
           }
        </motion.div>
      </motion.div>
      <motion.div className="opening-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}>
        <motion.div className="opening-section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}>
            <pre>interns</pre>
            <h2 className="main-heading">Internship <span>Opportunities</span></h2>
            <p className="txt-19">For students and early-career learners who want pratical exposure to real world, guidance from the team, and strong foundation for their careers.</p>
        </motion.div>
        <motion.div className="job-card-cont" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: "some", margin: "0px 0px -50px 0px" }}>
           {
           roles.map((job)=>
             <JobCard key={job.designation} img={job.img} title={job.designation} type={job.jobType} link={job.link} Description={job.Description} variants={cardVariants}/>
            )
           }
        </motion.div>
      </motion.div>
    </>
   )
}
export default OpeningSection;