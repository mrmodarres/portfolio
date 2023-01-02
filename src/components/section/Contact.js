import React from "react";
import { BiMailSend, BiRightArrowAlt } from "react-icons/bi";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
function Contact() {
  return (
    <section class="contact section" id="contact">
      <span className="section_subtitle">Get in touch</span>
      <h2 className="section_title">Contact</h2>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <BiMailSend className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>
              <a href="" target="_blank" className="contact__button">
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <BsWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">09179825112</span>
              <a href="" target="_blank" className="contact__button">
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <BsTelegram className="contact__card-icon" />
              <h3 className="contact__card-title">telegram</h3>
              <span className="contact__card-data">45454654</span>
              <a href="" target="_blank" className="contact__button">
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label for="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                placeholder="Insert your name..."
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label for="" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                placeholder="Insert your email..."
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label for="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write your project... "
                className="contact__form-input "
              />
            </div>

            <button className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
