import './LearnPage.css'
const LearnHeader= () => {
    return (
      <section className="learn-header-section">
        <div className="learn-header-content">
          <h1 className="sample main-heading">Practical <span className='prim-blue'>Learning</span> for Tech <span className='prim-blue'>Careers</span></h1>
          <p className='txt-19'>Industry focused courses designed for real world development and cloud roles. Learn through practical training and hands-on projects</p>
          <button className="learn-explore-btn white txt-19">Explore</button>
        </div>
      </section>
    )
}
export default LearnHeader;