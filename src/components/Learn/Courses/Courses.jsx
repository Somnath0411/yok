import './Courses.css'
import '../LearnPage.css'
import CourseCard from '../CourseCard'
import {Component} from 'react'
import Tabitem from './Tabitem.jsx'

const tabsList = [
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'AI', displayText: 'Ai'},
  {tabId: 'DIGITAL MARKETING', displayText: 'digital marketing'},
  {tabId: 'FULLSTACK', displayText: 'Fullstack'},
]
const courses=[
{
    Category: "AI",
    name: "Machine Learning Basics",
    description: "Master the fundamentals of supervised and unsupervised learning algorithms.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULLSTACK",
    name: "React & Node Masterclass",
    description: "Build scalable full-stack applications using the MERN stack from scratch.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DIGITAL MARKETING",
    name: "SEO Strategy 2026",
    description: "Learn how to rank on the first page of search engines with modern techniques.",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AI",
    name: "Prompt Engineering",
    description: "Unlock the full potential of LLMs by writing high-performance prompts.",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULLSTACK",
    name: "Next.js & Tailwind CSS",
    description: "Create lightning-fast, SEO-friendly web apps with modern styling.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DIGITAL MARKETING",
    name: "Social Media Analytics",
    description: "Turn data into decisions and optimize your social media ROI.",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AI",
    name: "Deep Learning with PyTorch",
    description: "Build neural networks and dive deep into computer vision models.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULLSTACK",
    name: "Database Design & SQL",
    description: "Learn to architect robust databases and write complex SQL queries.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DIGITAL MARKETING",
    name: "Content Marketing Mastery",
    description: "Craft stories that convert readers into loyal customers.",
    duration: "20 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULLSTACK",
    name: "DevOps for Web Developers",
    description: "Automate your workflow with Docker, GitHub Actions, and CI/CD.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  }
]
class Courses extends Component {
    state={
        searchValue:"",
        activeTabId:tabsList[0].tabId,
    }

    onClickCategory =(id)=>{
      this.setState({activeTabId:id})
    }
 
    onChangeSearch = (event) => {
      this.setState({searchValue:event.target.value})
    }
    filterResults = () => {
      const{activeTabId}=this.state
      let sectionresults
      if (activeTabId === "ALL") {
        sectionresults=courses
      }else{
         sectionresults=courses.filter((eachcourse)=>(eachcourse.Category===activeTabId))
      }
      return sectionresults
    }
    render(){
        const {searchValue,activeTabId}=this.state
        const filteredCourses=this.filterResults()
        const searchresults=courses.filter((eachCourse)=>{
          return activeTabId ==="ALL" ? (eachCourse.name.toLowerCase().includes(searchValue.toLowerCase())) :
          (eachCourse.name.toLowerCase().includes(searchValue.toLowerCase()) && eachCourse.Category===activeTabId)
        
        }
        )
        return (
          <section className='Course-section'>
            <h1 className="main-heading">Explore all Courses</h1>
            <input type="text" value={searchValue} className="search-input" placeholder="Search" onChange={this.onChangeSearch}/>
            <ul className="course-category-tabs-cont">
                {tabsList.map((eachtab)=>
                (<Tabitem key={eachtab.tabId} func={this.onClickCategory} isactive={eachtab.tabId===activeTabId} details={eachtab}/>)
                )}
            </ul>
            <ul className="courses-Cont">
              { searchValue === "" ?
                filteredCourses.map((eachCourse)=>(
                  <CourseCard courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} />
                )) :
                searchresults.map((eachCourse)=>(
                  <CourseCard courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} />
                ))
              }
            </ul>
          </section>
        )
    }
   
}

export default Courses