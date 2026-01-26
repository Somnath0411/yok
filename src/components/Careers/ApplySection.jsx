import ApplicationModal from '../../assets/EmailSend.jsx';

const ApplySection = () => {
   return (
    <div className="apply-bg">
      <section className="apply-section">
        <div className="apply-section-content">
          <h2 className="main-heading">Let's work together</h2>
          <p>Think you'd be a good fit?</p>
        </div>
        <ApplicationModal role='none'classname="apply-btn txt-23"/>
        {/* <button className="apply-btn txt-23 white"><a className="apply-link" href="">Apply</a></button>     */}
      </section>

    </div>
   )
}
export default ApplySection;