import FadeContent from "../../assets/FadeContent"
const ApplySection = () => {
   return (
    <div className="apply-bg">
      <section className="apply-section">
      <FadeContent>
        <div className="apply-section-content">
          <h1 className="main-heading">Let's work together</h1>
          <p>Think you'd be a good fit?</p>
        </div>
        </FadeContent>
        <FadeContent>
        <button className="apply-btn txt-23 white"><a className="apply-link" href="">Apply</a></button>
        </FadeContent>
      </section>

    </div>
   )
}
export default ApplySection