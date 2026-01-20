import './LearnPage.css'
import CourseCard from './CourseCard'
import LearnHeader from './LearnHeader.jsx'
import {Link} from 'react-router-dom'
const LearnPage= () => {
  const courses=[{
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
  name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
  name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
  name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
  name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
   name:"python",
   description:"learn python in an futuristic way",
   duration:"🕛 48 hrs",
   img:"https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  }
]
    return (
      <section className="learn-section">
        <LearnHeader/>
        <div className="courses-section-header txt-">
          <pre>Courses</pre>
          <h2 className="main-heading">Explore our courses</h2>
        </div>
        <div className="course-card-cont">
            {courses.map((course)=> <CourseCard courseName={course.name} description={course.description} img={course.img} duration={course.duration}/> )}
        </div>
      </section>
    )
}
export default LearnPage;