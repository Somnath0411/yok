
const JobCard = (props)=>{
 const {img, title, type, link} = props
 return(
  <div className="job-card">
    <img src={img} className="job-card-image" alt="" />
    <div className="job-card-description">
        <div className="job-description-content">
          <h1 className="txt-23">{title}</h1>
          <p className="txt-19">{type}</p>
        </div>
        <a className="job-card-apply-link" href={link}>Apply</a>
    </div>
    
  </div>
 )

}
export default JobCard