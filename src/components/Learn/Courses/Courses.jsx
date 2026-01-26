import './Courses.css'
import '../LearnPage.css'
import CourseCard from '../CourseCard'
import {Component} from 'react'
import Tabitem from './Tabitem.jsx'
// import { motion } from 'framer-motion'

const tabsList = [
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'DESIGN & USER EXPERIENCE', displayText: 'Design & User Experience'},
  {tabId: 'DIGITAL MARKETING', displayText: 'digital marketing'},
  {tabId: 'CLOUD', displayText: 'Cloud'},
  {tabId: 'DATA ENGINEERING & ANALYTICS', displayText: 'Data Engineering & Analytics'},
  {tabId: 'ARTIFICIAL INTELLIGENCE & DATA SCIENCE', displayText: 'Ai & DS'},
  {tabId: 'DEVELOPMENT & FRAMEWORKS', displayText: 'Development & Frameworks'},
  {tabId: 'OPERATIONS, DEVOPS & SECURITY', displayText: 'Operations, Devops & Securityt'},
  {tabId: 'ENTERPRISE TOOLS & ERP', displayText: 'Enterprise Tools & ERP'},
  {tabId: 'AUTOMATION & SPECIALIZED SYSTEMS', displayText: 'Automation & Specialized Systems'},
  {tabId: 'TESTING & DATABASES', displayText: 'Testingt & Databases'},
  {tabId: 'MIDDLEWARE & WEB SERVERS', displayText: 'MIDDLEWARE & WEB SERVERS'},
]
const courses=[
{
    Category: "DESIGN & USER EXPERIENCE",
    name: "UI/UX Training",
    description: "Master the fundamentals of supervised and unsupervised learning algorithms.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
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
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Snowflake Training",
    description: "Craft stories that convert readers into loyal customers.",
    duration: "20 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Big Data Training",
    description: "Automate your workflow with Docker, GitHub Actions, and CI/CD.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Data Warehouse Training",
    description: "Learning to design central repositories that integrate data from multiple sources for business reporting",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "Tableau Training",
    description: "Mastering one of the world’s leading tools for creating interactive, visual data dashboards.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ENGINEERING & ANALYTICS",
    name: "MSBI Training",
    description: "Short for Microsoft Business Intelligence; it involves using MS tools to transform raw data into actionable insights",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
    name: "Artificial Intelligence Training",
    description: " Learning how to build systems that can simulate human intelligence, like reasoning and problem-solving",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
    name: "Data Science Training",
    description: "Combining statistics and math to extract meaningful patterns and predictions from complex data.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
    name: "R Language Training",
    description: "Specialized training in R, a language used primarily by statisticians for data mining and modeling.",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "Full Stack Development",
    description: "Learning both the front-end (what users see) and back-end (server-side) of web applications.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "Java Training",
    description: "Mastering a versatile, high-level language used for everything from enterprise apps to Android development.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  // {
  //   Category: "DEVELOPMENT & FRAMEWORKS",
  //   name: "Snowflake Training",
  //   description: "Craft stories that convert readers into loyal customers.",
  //   duration: "20 hrs",
  //   img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  // },
  // {
  //   Category: "DEVELOPMENT & FRAMEWORKS",
  //   name: "Big Data Training",
  //   description: "Automate your workflow with Docker, GitHub Actions, and CI/CD.",
  //   duration: "55 hrs",
  //   img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  // },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "Python",
    description: "Learning the most popular general-purpose language, known for its readability and use in AI and automation.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: ".NET Training",
    description: "Training in Microsoft’s framework used for building a wide variety of web, desktop, and mobile apps.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "C / C++ Training",
    description: "Learning foundational, high-performance languages often used in systems programming and game engines.",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "React Native Training",
    description: "A framework for building mobile apps using JavaScript that work on both iOS and Android.",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "Ionic Training",
    description: "Focuses on building 'hybrid' mobile apps using standard web technologies like HTML and CSS.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVELOPMENT & FRAMEWORKS",
    name: "Apple iOS / Android Training",
    description: "Specialized tracks for building native apps specifically for iPhones or Android devices.",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "DevOps Training",
    description: "Bridging the gap between software development and IT operations to speed up software delivery.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "DevSecOps Training",
    description: "An evolution of DevOps that integrates security practices directly into every stage of the development cycle.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "Kubernetes Training",
    description: "Learning to manage 'containers'—packages that allow software to run reliably across different environments",
    duration: "20 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "Ethical Hacking Training",
    description: " Learning how to legally 'hack' systems to find and fix security vulnerabilities before criminals do.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "Linux Training",
    description: "Mastering the open-source operating system that powers the vast majority of the world's servers.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "Unix/Shell Scripting Training",
    description: " Learning to write commands that automate repetitive tasks within the operating system.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "OPERATIONS, DEVOPS & SECURITY",
    name: "Perl Training",
    description: "Instruction in a legacy programming language often used for system administration and text processing",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE TOOLS & ERP",
    name: "Salesforce",
    description: " Training for a platform that automates IT service desk tasks and enterprise workflows.",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE TOOLS & ERP",
    name: "Workday Training",
    description: "Focuses on a cloud-based system used by large companies for HR and financial management.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE TOOLS & ERP",
    name: "SAP Training",
    description: " Learning the most popular Enterprise Resource Planning (ERP) software for managing global business operations",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE TOOLS & ERP",
    name: "Pega Training",
    description:  "Mastering a low-code platform used for 'Business Process Management' (BPM) and customer engagement.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE TOOLS & ERP",
    name: "Oracle Training",
    description: " Specialized training for Oracle’s massive suite of database and enterprise software products.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "Robotic Process Automation (RPA)",
    description: "Using 'bots' to automate repetitive, manual office tasks like data entry.",
    duration: "20 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "IoT Training:",
    description: "Learning to connect everyday physical objects (like fridges or sensors) to the internet and each other.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "Blockchain Training",
    description: "Understanding the decentralized ledger technology behind cryptocurrencies and secure data tracking.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "VMware Training",
    description: "Learning 'virtualization' software that allows one physical server to act as many separate virtual ones..",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "EDA (Electronic Design Automation)",
    description: "Using software tools to design complex electronic systems like integrated circuits.",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & SPECIALIZED SYSTEMS",
    name: "TOGAF Training",
    description: "* An enterprise architecture framework used to align business goals with IT infrastructure.",
    duration: "15 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "TESTING & DATABASES",
    name: "Software Testing Training",
    description: "Learning how to find bugs and ensure software meets quality standards before it launches.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "TESTING & DATABASES",
    name: "Selenium",
    description: "Mastering a specific tool used to automate the testing of web applications.",
    duration: "25 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "TESTING & DATABASES",
    name: "MS SQL Server DBA",
    description: "Training to become a Database Administrator (DBA) specifically for Microsoft’s SQL database systems.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "MIDDLEWARE & WEB SERVERS",
    name: "WebLogic / WebSphere / DataPower",
    description: "These are various 'middleware' tools used to connect different software applications and manage web traffic for large companies.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DIGITAL MARKETING",
    name: "Digital Marketing Training",
    description: "Learning how to promote brands and products using social media, search engines, and email.",
    duration: "20 hrs",
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
        // const containerVariants = {
        //   hidden: { opacity: 0 },
        //   visible: {
        //     opacity: 1,
        //     transition: {
        //       staggerChildren: 0.15,
        //       delayChildren: 0.1,
        //     },
        //   },
        // }
        // const cardVariants = {
        //   hidden: { opacity: 0, y: 50 },
        //   visible: {
        //     opacity: 1,
        //     y: 0,
        //     transition: { duration: 0.6, ease: 'easeOut' },
        //   },
        // }
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
                  <CourseCard key={eachCourse.name} courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} />
                )) :
                searchresults.map((eachCourse)=>(
                  <CourseCard key={eachCourse.name} courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} />
                ))
              }
            </ul>
          </section>
        )
    }
   
}

export default Courses