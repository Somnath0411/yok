import './LearnPage.css'
import CourseCard from './CourseCard'
import LearnHeader from './LearnHeader.jsx'
import {Link} from 'react-router-dom'
const LearnPage= () => {
  const courses=[
   {
    Category: "DESIGN & USER EXPERIENCE",
    name: "UI/UX Training",
    description: "Master the fundamentals of supervised and unsupervised learning algorithms.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1769081116/aft86e0mqmkuu4or9er8.jpg"
  },
  {
    Category: "DESIGN & USER EXPERIENCE",
    name: "Graphical Design Training",
    description: "Build scalable full-stack applications using the MERN stack from scratch.",
    duration: "120 hrs",
    img: "https://rmskytech.com/wp-content/uploads/2024/08/graphic-designer-hd-image.jpg.webp"
  },
  {
    Category: "CLOUD",
    name: "AWS Training",
    description: "Learn how to rank on the first page of search engines with modern techniques.",
    duration: "30 hrs",
    img: "https://i0.wp.com/sanver.com/wp-content/uploads/2024/01/aws-cloud-hosting-service.png?fit=1200%2C800&ssl=1"
  },
  {
    Category: "CLOUD",
    name: "Microsoft Azure Training",
    description: "Unlock the full potential of LLMs by writing high-performance prompts.",
    duration: "15 hrs",
    img: "https://paradisecomputing.co.uk/media/4s2mvam4/micosoft-azure.png?upscale=false&width=1200         "
  },
  {
    Category: "CLOUD",
    name: "Google Cloud Platform (GCP)",
    description: "Create lightning-fast, SEO-friendly web apps with modern styling.",
    duration: "45 hrs",
    img: "https://www.clouddatainsights.com/wp-content/uploads/2022/09/Depositphotos_335417812_S.jpg"
  },
  {
    Category: "CLOUD",
    name: "Cloud Computing",
    description: "Turn data into decisions and optimize your social media ROI.",
    duration: "25 hrs",
    img: "https://images.surferseo.art/dd5bca24-2a93-452c-a5fa-1362d7f63467.png"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Data Engineering Training",
    description: "Build neural networks and dive deep into computer vision models.",
    duration: "80 hrs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHkPO9BNRX0bjAo1Q9J7sJWVrdFm_ddlP7Q&s"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "ETL Testing Training",
    description: "Learn to architect robust databases and write complex SQL queries.",
    duration: "40 hrs",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*6tiErTf3IPqBXR9bqR1lDg.png"
  }
]
    return (
      <section className="learn-section">
        <LearnHeader/>
        <div className="courses-section-header ">
          <pre>Courses</pre>
          <h2 className="main-heading">Explore our courses</h2>
        </div>
        <div className="course-card-cont">
            {courses.map((course)=> <CourseCard courseName={course.name} description={course.description} img={course.img} duration={course.duration}/> )}
        </div>
        <div className="xplore-btn-cont">
          <Link to='/courses'  onClick={()=>{window.scrollTo(0,0);}}>
            <button className="xplore-all-btn white-bg txt-19">Explore all Courses</button>
          </Link>
        </div>
      </section>
    )
}
export default LearnPage;