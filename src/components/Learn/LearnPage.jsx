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
    img: "https://unsplash.com/photos/a-black-cell-phone-uT7l-Ds81YM"
  },
  {
    Category: "DESIGN & USER EXPERIENCE",
    name: "Graphical Design Training",
    description: "Build scalable full-stack applications using the MERN stack from scratch.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD",
    name: "AWS Training",
    description: "Learn how to rank on the first page of search engines with modern techniques.",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD",
    name: "Microsoft Azure Training",
    description: "Unlock the full potential of LLMs by writing high-performance prompts.",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD",
    name: "Google Cloud Platform (GCP)",
    description: "Create lightning-fast, SEO-friendly web apps with modern styling.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD",
    name: "Cloud Computing",
    description: "Turn data into decisions and optimize your social media ROI.",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Data Engineering Training",
    description: "Build neural networks and dive deep into computer vision models.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "ETL Testing Training",
    description: "Learn to architect robust databases and write complex SQL queries.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
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