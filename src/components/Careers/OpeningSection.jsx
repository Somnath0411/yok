import JobCard from './JobCard'
import './Careers.css'
const OpeningSection = () => {
   const roles = [
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://static.vecteezy.com/system/resources/previews/035/504/977/non_2x/ai-generated-a-smiling-teacher-in-a-classroom-setting-free-photo.jpg"
    },
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:""
    },
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:""
    },
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:""
    },
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:""
    },
    {
        designation:'SEO',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:""
    }
   ]
   return (
      <div className="opening-section">
        <div className="opening-section-title">
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