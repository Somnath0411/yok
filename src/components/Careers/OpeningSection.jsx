import JobCard from './JobCard'
import './Careers.css'
const OpeningSection = () => {
   const roles = [
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation:'Digital Marketing',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation:'Video Editing',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation:'Social Media Handler',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation:'Developer',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    },
    {
        designation:'Designer',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
    }
   ]
   return (
      <div className="opening-section">
        <div className="opening-section-title">
            <pre>Jobs</pre>
            <h1 className="main-heading">Open Roles</h1>
            <p className="txt-19">Be part of meaningful projects with people who value clear thinking and collaboration.</p>
        </div>
        <div className="job-card-cont">
           {
           roles.map((job)=>
             <JobCard img={job.img} title={job.designation} type={job.jobType} link={job.link}/>
            )
           }
        </div>

      </div>
   )
}
export default OpeningSection