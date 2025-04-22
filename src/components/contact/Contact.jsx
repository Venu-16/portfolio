// // import React from 'react'

// const Contact = () => {
//   return (
//     <section className="contact section" id="contact">
//       <h2 className="section__title">Get in touch</h2>
//       <span className="section__subtitle">Contact me</span>

//       <div className="contact__container container grid">
//         {/* Email Info */}
//         <div className="contact__contact">
//           <h3 className="contact__title">Talk to me</h3>
//           <div className="contact__info">
//             <h3 className="contact__card-title">Email</h3>
//             <span className="contact__card-data">venumadhav2216@gmail.com</span>
//             <a href="mailto:venumadhav2216@gmail.com" className="contact__button">
//               Write me{" "}
//               <i className="bx bx-right-arrow-alt contact__button-icon"></i>
//             </a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="contact__form">
//           <form>
//             <div className="contact__form-group">
//               <label>Name</label>
//               <input type="text" className="contact__input" placeholder="Your Name" />
//             </div>
//             <div className="contact__form-group">
//               <label>Email</label>
//               <input type="email" className="contact__input" placeholder="Your Email" />
//             </div>
//             <div className="contact__form-group">
//               <label>Message</label>
//               <textarea className="contact__input" placeholder="Your Message" rows="4"></textarea>
//             </div>
//             <button type="submit" className="contact__button">Send</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact

import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__cards grid">
            
            <div className="contact__card">
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">venumadhav2216@gmail.com</span>
              <a href="mailto:venumadhav2216@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            
            <div className="contact__card">
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@venumadhav</span>
              <a href="https://t.me/vm_mt" target="_blank" rel="noreferrer" className="contact__button">
                Chat with me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>
          <form className="contact__form">
            <div className="contact__form-group">
              <input type="text" className="contact__input" placeholder="Your Name" />
            </div>
            <div className="contact__form-group">
              <input type="email" className="contact__input" placeholder="Your Email" />
            </div>
            <div className="contact__form-group">
              <textarea className="contact__input" placeholder="Your Message" rows="4"></textarea>
            </div>
            <button type="submit" className="contact__button">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
