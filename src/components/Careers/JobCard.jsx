import arrow from '../../assets/arrow.jsx'
const JobCard = (props)=>{
 const {img, title, type, link} = props
 return(
  <div className="job-card">
    <div className="job-card-image-wrapper">
      <img className="job-card-image" src={img} alt="" />
      </div>
    <div className="job-card-description">
        <div className="job-description-content">
          <h1 className="txt-23">{title}</h1>
          <p className="txt-19">{type}</p>
        </div>
        <div className="job-card-apply">
        <a className="job-card-apply-link" href={link}>Apply</a>
        <p>{arrow()}</p>
        </div>
    </div>
  </div>
 )
}
export default JobCard