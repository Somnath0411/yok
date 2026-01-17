import './ContactUs.css'
import '../Services/Servicespage.css'
import FadeContent from '../../assets/FadeContent'
const ContactUs = (props) => {
    return(
        <section>
        <div className="hero-section">
          <div className="hero-content"> 
            <FadeContent>
            <h1 className="main-heading">Let's connect and talk about <span>your needs</span> </h1>
            <p className="hero-description txt-19">
                We work with teams and institutions to support projects, partnership, and learning programs.
            </p>
            </FadeContent>
            
            <div className="contact-card-container">
                <FadeContent>
                <div className="eachContact-card">
                <img src="https://static.vecteezy.com/system/resources/previews/035/504/977/non_2x/ai-generated-a-smiling-teacher-in-a-classroom-setting-free-photo.jpg" className="contact-images"/>
                <div className="contact-detail">
                    <p className="txt-13 contact-type">Email Us</p>
                    <p className="txt-16">symbotz@gmail.com</p>
                </div>
                </div>
                </FadeContent>
                <FadeContent>
                <div className="eachContact-card">
                <img src="" className="contact-images" />
                <div className="contact-detail">
                    <p className="txt-13 contact-type">Call us</p>
                    <p className="txt-16">symbotz@gmail.com</p>
                </div>
                </div>
                </FadeContent>
                <FadeContent>
                <div className="eachContact-card">
                <img src="" className="contact-images" />
                <div className="contact-detail">
                    <p className="txt-13 contact-type">Location</p>
                    <p className="txt-16">symbotz@gmail.com</p>
                </div>
                </div>
                </FadeContent>
            </div>
          </div>
            <div className="hero-image-placeholder">
                <FadeContent>
                <img className="hero-image" src="https://static.vecteezy.com/system/resources/previews/035/504/977/non_2x/ai-generated-a-smiling-teacher-in-a-classroom-setting-free-photo.jpg" alt='yokesh' />
                </FadeContent>
            </div>
        </div>
      
            <div className="follow-journey-bg">
                <div className="follow-journery-container">
                    <FadeContent>
                        <p className="txt-23 follow-journey-heading">
                    FOLLOW OUR JOURNEY
                    </p>   
                    </FadeContent>
                    <div className="follow-socialmedia-links lg-screen">
                            <a style={{textDecoration:"none"}} href="#" aria-label="X">
                            <FadeContent>
                                <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M18.317 2h3.358l-7.334 8.438L23 21.88h-6.803l-5.301-6.936-6.097 6.935H1.442l7.863-9.012L1 2h6.98l4.815 6.361zm-1.192 17.847h1.855L6.964 3.9H4.932z"></path></svg>
                                <p>X</p>
                            </div>
                            </FadeContent>
                          
                        </a>
                        <a style={{textDecoration:"none"}} href="#" aria-label="Instagram">
                            <FadeContent>
                                <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><g clip-path="url(#instagram_svg_a)"><path d="M12 3.833c2.667 0 3 0 4.083.084 2.75.083 4 1.416 4.084 4.083.083 1.083.083 1.333.083 4s0 3-.083 4c-.084 2.667-1.417 4-4.084 4.083-1.083.084-1.333.084-4.083.084-2.667 0-3 0-4-.084C5.25 20 4 18.667 3.917 16c-.084-1.083-.084-1.333-.084-4s0-3 .084-4C4 5.333 5.333 4 8 3.917c1-.084 1.333-.084 4-.084M12 2c-2.75 0-3.083 0-4.083.083C4.25 2.25 2.25 4.25 2.083 7.917 2 8.917 2 9.25 2 12s0 3.083.083 4.083c.167 3.667 2.167 5.667 5.834 5.834C8.917 22 9.25 22 12 22s3.083 0 4.083-.083c3.667-.167 5.667-2.167 5.834-5.834C22 15.083 22 14.75 22 12s0-3.083-.083-4.083C21.75 4.25 19.75 2.25 16.083 2.083 15.083 2 14.75 2 12 2m0 4.833c-2.833 0-5.167 2.334-5.167 5.167S9.167 17.167 12 17.167s5.167-2.334 5.167-5.167S14.833 6.833 12 6.833m0 8.5A3.343 3.343 0 0 1 8.667 12c0-1.833 1.5-3.333 3.333-3.333s3.333 1.5 3.333 3.333-1.5 3.333-3.333 3.333M17.333 5.5c-.666 0-1.166.5-1.166 1.167 0 .666.5 1.166 1.166 1.166.667 0 1.167-.5 1.167-1.166C18.5 6 18 5.5 17.333 5.5"></path></g><defs><clipPath id="instagram_svg_a"><path fill="#fff" d="M2 2h20v20H2z"></path></clipPath></defs></svg>
                                <p>Instagram</p>
                            </div>
                            </FadeContent>
                        </a>
                        <a style={{textDecoration:"none"}} href="#" aria-label="LinkedIn">
                            <FadeContent>
                            <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><g clip-path="url(#linkedin_svg_a)"><path d="M5.583 3.174c0 1.217-1.008 2.174-2.291 2.174C2.008 5.348 1 4.39 1 3.174S2.008 1 3.292 1s2.291.957 2.291 2.174m0 3.913H1V21h4.583zm7.334 0H8.333V21h4.584v-7.304c0-4.087 5.5-4.435 5.5 0V21H23v-8.783C23 5.347 14.842 5.61 12.917 9z"></path></g><defs><clipPath id="linkedin_svg_a"><path fill="#fff" d="M1 1h22v20H1z"></path></clipPath></defs></svg>
                                <p>Linkedin</p>
                            </div>
                            </FadeContent>
                        </a>
                    </div>
                        <div className="follow-socialmedia-links sm-screen">
                        <a style={{textDecoration:"none"}} href="#" aria-label="X">
                            <FadeContent>
                                <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.317 2h3.358l-7.334 8.438L23 21.88h-6.803l-5.301-6.936-6.097 6.935H1.442l7.863-9.012L1 2h6.98l4.815 6.361zm-1.192 17.847h1.855L6.964 3.9H4.932z"></path></svg>
                                <p>X</p>
                            </div>
                            </FadeContent>
                        </a>
                        <a style={{textDecoration:"none"}} href="#" aria-label="Instagram">
                            <FadeContent>
                            <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><g clip-path="url(#instagram_svg_a)"><path d="M12 3.833c2.667 0 3 0 4.083.084 2.75.083 4 1.416 4.084 4.083.083 1.083.083 1.333.083 4s0 3-.083 4c-.084 2.667-1.417 4-4.084 4.083-1.083.084-1.333.084-4.083.084-2.667 0-3 0-4-.084C5.25 20 4 18.667 3.917 16c-.084-1.083-.084-1.333-.084-4s0-3 .084-4C4 5.333 5.333 4 8 3.917c1-.084 1.333-.084 4-.084M12 2c-2.75 0-3.083 0-4.083.083C4.25 2.25 2.25 4.25 2.083 7.917 2 8.917 2 9.25 2 12s0 3.083.083 4.083c.167 3.667 2.167 5.667 5.834 5.834C8.917 22 9.25 22 12 22s3.083 0 4.083-.083c3.667-.167 5.667-2.167 5.834-5.834C22 15.083 22 14.75 22 12s0-3.083-.083-4.083C21.75 4.25 19.75 2.25 16.083 2.083 15.083 2 14.75 2 12 2m0 4.833c-2.833 0-5.167 2.334-5.167 5.167S9.167 17.167 12 17.167s5.167-2.334 5.167-5.167S14.833 6.833 12 6.833m0 8.5A3.343 3.343 0 0 1 8.667 12c0-1.833 1.5-3.333 3.333-3.333s3.333 1.5 3.333 3.333-1.5 3.333-3.333 3.333M17.333 5.5c-.666 0-1.166.5-1.166 1.167 0 .666.5 1.166 1.166 1.166.667 0 1.167-.5 1.167-1.166C18.5 6 18 5.5 17.333 5.5"></path></g><defs><clipPath id="instagram_svg_a"><path fill="#fff" d="M2 2h20v20H2z"></path></clipPath></defs></svg>
                                <p>Instagram</p>
                            </div> 
                            </FadeContent>
                        </a>
                        <a style={{textDecoration:"none"}} href="#" aria-label="LinkedIn">
                            <FadeContent>
                            <div className='social-media-app'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><g clip-path="url(#linkedin_svg_a)"><path d="M5.583 3.174c0 1.217-1.008 2.174-2.291 2.174C2.008 5.348 1 4.39 1 3.174S2.008 1 3.292 1s2.291.957 2.291 2.174m0 3.913H1V21h4.583zm7.334 0H8.333V21h4.584v-7.304c0-4.087 5.5-4.435 5.5 0V21H23v-8.783C23 5.347 14.842 5.61 12.917 9z"></path></g><defs><clipPath id="linkedin_svg_a"><path fill="#fff" d="M1 1h22v20H1z"></path></clipPath></defs></svg>
                                <p>Linkedin</p>
                            </div>
                            </FadeContent>
                        </a>
                        </div>
                </div>
            </div>
        </section>
    ) 
}
export default ContactUs;