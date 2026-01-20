const HeroSection = (props) =>{
    const {title ,description,btncontent, imgsrc} = props
    return(
        <section className="hero-section">
        <div className="hero-content">
          <h1 className="main-heading fade-up">{title}</h1>
          <p className="hero-description txt-19">
            {description}
          </p>
          <button className="btn-primary fade-up">{btncontent}</button>
        </div>
        <div className="hero-image-placeholder">
          <img className="hero-image fade-up" src={imgsrc} alt='yokesh' />
        </div>
      </section>
    )
}
export default HeroSection;