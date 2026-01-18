import './LearnPage.css'
const CourseCard = (props)=>{
 const {CourseName,description,img,duration} = props
 return(
  <div className="course-card">
    <div className="course-card-image-wrapper">
      <img className="course-card-image" src={img} alt="" />
      </div>
    <div className="course-card-description">
        <div className="course-description-content">
          <h1 className="txt-23">{CourseName}</h1>
          <p className="txt-19">{description}</p>
        </div>
        <div className="course-card-duration-cont">
         <p>{duration}</p>
        </div>
    </div>
  </div>
 )
}
export default CourseCard;