import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <div className="contact__contact">
                <h3 className="contact__title">Talk to me
                    </h3>
                    <div className="contact__info">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">venumadhav2216@gmail.com</span>

                        <a href="mailto:venumadhav2216@gmail.com" className="contact__button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    </div>

         </div>
    </section>
  )
}

export default Contact
