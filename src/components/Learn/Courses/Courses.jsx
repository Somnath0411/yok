import './Courses.css'
import '../LearnPage.css'
import CourseCard from '../CourseCard'
import {Component} from 'react'
import Tabitem from './Tabitem.jsx'
import { motion } from 'framer-motion'

const tabsList = [
  {tabId: 'ALL', displayText: 'All'},
  {tabId: 'DATA ANALYTICS (BUSINESS & BI FOCUS)', displayText: 'Data Analytics'},
  {tabId: 'DATA SCIENCE & ARTIFICIAL INTELLIGENCE', displayText: 'Ai & DS'},
  {tabId: 'CLOUD COMPUTING', displayText: 'Cloud computing'},
  {tabId: 'DEVOPS & CLOUD AUTOMATION', displayText: 'DevOps'},
  {tabId: 'PROGRAMMING (CORE LANGUAGES)', displayText: 'Programming'},
  {tabId: 'DIGITAL MARKETING', displayText: 'digital marketing'},
  {tabId: 'FULL STACK & FRAMEWORK DEVELOPMENT', displayText: 'Development & Frameworks'},
  {tabId: 'MOBILE APPLICATION DEVELOPMENT', displayText: 'Mobile Apps Development'},
  {tabId: 'SOFTWARE TESTING & QA', displayText: 'Testing / QA'},
  {tabId: 'AUTOMATION & RPA', displayText: 'AUTOMATION & RPA'},
  {tabId: 'ETHICAL HACKING / CYBER SECURITY', displayText: 'Cyber Security'},
  {tabId: 'ENTERPRISE & EMERGING TECHNOLOGIES', displayText: 'Emerging Tech'},

]
const courses = [
  // DATA ANALYTICS (BUSINESS & BI FOCUS)
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "Data Analytics",
    description: "Learning the techniques to process and perform statistical analysis on datasets to discover useful information.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "Power BI / MSBI",
    description: "Mastering Microsoft's business analytics tools to provide interactive visualizations and business intelligence capabilities.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "Tableau Training",
    description: "Learning to create powerful, interactive dashboards and data visualizations for business decision-making.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "Data Warehousing",
    description: "Designing and implementing central repositories for consolidated data from multiple sources.",
    duration: "50 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "SQL Server DBA Training",
    description: "Learning to install, configure, and maintain Microsoft SQL Server databases as a professional administrator.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA ANALYTICS (BUSINESS & BI FOCUS)",
    name: "Oracle SQL & PL/SQL",
    description: "Mastering advanced database querying and procedural programming for Oracle database systems.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // DATA SCIENCE & ARTIFICIAL INTELLIGENCE
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "Data Science",
    description: "Combining statistics, mathematics, and programming to extract actionable insights from structured and unstructured data.",
    duration: "120 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "Data Science with Python",
    description: "Leveraging Python’s powerful libraries like Pandas, NumPy, and Scikit-learn for comprehensive data analysis.",
    duration: "90 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "Machine Learning",
    description: "Building predictive models and algorithms that allow computers to learn and improve from experience.",
    duration: "75 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "AI & Deep Learning",
    description: "Exploring neural networks and complex architectures to solve high-level tasks like image and speech recognition.",
    duration: "100 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "Big Data Hadoop",
    description: "Learning to store and process massive datasets across clusters of computers using the Hadoop framework.",
    duration: "65 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    name: "Spark Training",
    description: "Mastering the fast, unified analytics engine for large-scale data processing and real-time streaming.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // CLOUD COMPUTING
  {
    Category: "CLOUD COMPUTING",
    name: "AWS Training",
    description: "Learning the most comprehensive cloud platform, focusing on EC2, S3, and cloud architecture design.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD COMPUTING",
    name: "Microsoft Azure Training",
    description: "Training in Microsoft’s cloud services for building, testing, and managing applications through global data centers.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "CLOUD COMPUTING",
    name: "Google Cloud Platform (GCP)",
    description: "Mastering Google’s suite of cloud computing services for scalable web and data solutions.",
    duration: "50 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // DEVOPS & CLOUD AUTOMATION
  {
    Category: "DEVOPS & CLOUD AUTOMATION",
    name: "DevOps Training",
    description: "Bridging development and operations through automation, CI/CD pipelines, and improved collaboration.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVOPS & CLOUD AUTOMATION",
    name: "Kubernetes Training",
    description: "Mastering the container orchestration system for automating deployment, scaling, and management of apps.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "DEVOPS & CLOUD AUTOMATION",
    name: "Docker",
    description: "Learning to use containers to package up applications with all of its dependencies for consistent deployment.",
    duration: "30 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // PROGRAMMING (CORE LANGUAGES)
  {
    Category: "PROGRAMMING (CORE LANGUAGES)",
    name: "Python Programming",
    description: "Learning the syntax and logic of Python for automation, web development, and data manipulation.",
    duration: "50 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "PROGRAMMING (CORE LANGUAGES)",
    name: "Core Java",
    description: "Building a strong foundation in Object-Oriented Programming using one of the world's most popular languages.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "PROGRAMMING (CORE LANGUAGES)",
    name: ".NET Training",
    description: "Mastering the framework for building modern, cloud-based, and internet-connected applications.",
    duration: "70 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // FULL STACK & FRAMEWORK DEVELOPMENT
  {
    Category: "FULL STACK & FRAMEWORK DEVELOPMENT",
    name: "Full Stack Developer",
    description: "Comprehensive training covering both the client-side and server-side of web development.",
    duration: "150 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULL STACK & FRAMEWORK DEVELOPMENT",
    name: "Java Full Stack",
    description: "Mastering the Java ecosystem including Spring, Hibernate, and modern frontend frameworks.",
    duration: "140 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULL STACK & FRAMEWORK DEVELOPMENT",
    name: "Spring Framework",
    description: "Deep dive into the powerful Java framework for building enterprise-level, high-performance applications.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULL STACK & FRAMEWORK DEVELOPMENT",
    name: "Angular Training",
    description: "Learning the TypeScript-based web application framework for building single-page client applications.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "FULL STACK & FRAMEWORK DEVELOPMENT",
    name: "ASP.NET MVC / Core",
    description: "Mastering the model-view-controller pattern to build dynamic websites and web APIs.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // MOBILE APPLICATION DEVELOPMENT
  {
    Category: "MOBILE APPLICATION DEVELOPMENT",
    name: "Android App Development",
    description: "Building native applications for the Android ecosystem using Java and Kotlin.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "MOBILE APPLICATION DEVELOPMENT",
    name: "Apple iOS Training",
    description: "Developing native mobile apps for iPhones and iPads using Swift and Xcode.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "MOBILE APPLICATION DEVELOPMENT",
    name: "React Native Training",
    description: "Using JavaScript and React to build cross-platform mobile apps for both iOS and Android.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // SOFTWARE TESTING & QA
  {
    Category: "SOFTWARE TESTING & QA",
    name: "Software Testing",
    description: "Introduction to manual testing principles, bug life cycles, and quality assurance processes.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "SOFTWARE TESTING & QA",
    name: "Selenium Testing",
    description: "Automating web browser testing to ensure web application reliability across different platforms.",
    duration: "50 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "SOFTWARE TESTING & QA",
    name: "Automation Testing",
    description: "Learning to use software tools to execute tests and compare actual outcomes with predicted outcomes.",
    duration: "55 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "SOFTWARE TESTING & QA",
    name: "Appium Mobile Testing",
    description: "Mastering the open-source tool for automating native, mobile web, and hybrid applications.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // AUTOMATION & RPA
  {
    Category: "AUTOMATION & RPA",
    name: "Robotic Process Automation (RPA)",
    description: "Training in technology that allows anyone to configure computer software to emulate human actions.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & RPA",
    name: "UiPath Training",
    description: "Specialized training in one of the leading RPA tools for enterprise-level process automation.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "AUTOMATION & RPA",
    name: "Blue Prism Training",
    description: "Learning the administrative and development aspects of the Blue Prism RPA software platform.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // ETHICAL HACKING / CYBER SECURITY
  {
    Category: "ETHICAL HACKING / CYBER SECURITY",
    name: "Ethical Hacking",
    description: "Learning how to legally probe and test systems for security vulnerabilities to protect organizations.",
    duration: "70 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // ENTERPRISE & EMERGING TECHNOLOGIES
  {
    Category: "ENTERPRISE & EMERGING TECHNOLOGIES",
    name: "Salesforce Training",
    description: "Learning to manage and develop on the world’s leading CRM platform for business growth.",
    duration: "60 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE & EMERGING TECHNOLOGIES",
    name: "SAP Training",
    description: "Mastering the enterprise resource planning software used to manage global business operations.",
    duration: "80 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE & EMERGING TECHNOLOGIES",
    name: "Blockchain Training",
    description: "Understanding decentralized ledger technology and its applications beyond cryptocurrency.",
    duration: "50 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },
  {
    Category: "ENTERPRISE & EMERGING TECHNOLOGIES",
    name: "Internet of Things (IoT)",
    description: "Learning to connect physical devices to the internet to collect and exchange data.",
    duration: "45 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  },

  // DIGITAL MARKETING
  {
    Category: "DIGITAL MARKETING",
    name: "Digital Marketing",
    description: "Mastering SEO, SEM, content strategy, and social media to drive online engagement and sales.",
    duration: "40 hrs",
    img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1768029525/xufhduongclasyxd9c2u.jpg"
  }
];
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
           const containerVariants = {
          hidden: { },
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }
        const cardVariants = {
          hidden: {  y: 50 },
          visible: {
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }
        return (
          <section className='Course-section'>
            <h1 className="main-heading">Explore all Courses</h1>
            <input type="text" value={searchValue} className="search-input" placeholder="Search" onChange={this.onChangeSearch}/>
            <ul className="course-category-tabs-cont">
                {tabsList.map((eachtab)=>
                (<Tabitem key={eachtab.tabId} func={this.onClickCategory} isactive={eachtab.tabId===activeTabId} details={eachtab}/>)
                )}
            </ul>
             <motion.ul className="courses-Cont" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true}}>
              { searchValue === "" ?
                filteredCourses.map((eachCourse)=>(
                  <CourseCard key={eachCourse.name} courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} variants={cardVariants}/>
                )) :
                searchresults.map((eachCourse)=>(
                  <CourseCard key={eachCourse.name} courseName={eachCourse.name} description={eachCourse.description} img={eachCourse.img} duration={eachCourse.duration} variants={cardVariants}/>
                ))
              }
            </motion.ul>
          </section>
        )
    }
   
}

export default Courses