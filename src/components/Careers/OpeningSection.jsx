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
        img:"https://res.cloudinary.com/drzttwcyz/image/upload/v1768570267/photo-1563986768494-4dee2763ff3f_ascpp0.avif"
    },
    {
        designation:'Video Editing',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/drzttwcyz/image/upload/v1768570043/photo-1530712024539-ecd73dfb1c9d_ntihvk.avif"
    },
    {
        designation:'Social Media Handler',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/drzttwcyz/image/upload/v1768570418/photo-1611926653458-09294b3142bf_oojyyh.avif"
    },
    {
        designation:'Developer',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/drzttwcyz/image/upload/v1768569869/photo-1498050108023-c5249f4df085_silxm7.avif"
    },
    {
        designation:'Designer',
        jobType:'Remote: Fulltime',
        link:"Apply",
        img:"https://res.cloudinary.com/drzttwcyz/image/upload/v1768569727/photo-1626785774573-4b799315345d_ug4r2s.avif"
    }
   ]
   return (
    <>
      <div className="opening-section">
        <div className="opening-section-title">
            <pre>Jobs</pre>
            <h2 className="main-heading">Open Roles</h2>
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
      <div className="opening-section">
        <div className="opening-section-title">
            <pre>interns</pre>
            <h2 className="main-heading">Internship <span>Opportunities</span></h2>
            <p className="txt-19">For students and early-career learners who want pratical exposure to real world, guidance from the team, and strong foundation for their careers.</p>
        </div>
        <div className="job-card-cont">
           {
           roles.map((job)=>
             <JobCard img={job.img} title={job.designation} type={job.jobType} link={job.link}/>
            )
           }
        </div>
      </div>
    </>
   )
}
export default OpeningSection;