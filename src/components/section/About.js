import React from "react";
import { BiAward, BiBriefcaseAlt, BiSupport } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
function About() {
  return (
    <section className="about section" id="about">
      <Fade>
        <span className="section_subtitle">My Intro</span>
        <h2 className="section_title">About Me</h2>
      </Fade>

      <div className="about__container container grid">
        <Fade direction="left" style={{ margin: "auto" }}>
          <img src="/media/image/about.JPG" className="about__img" />
        </Fade>
        <Fade direction="right">
          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <BiAward className="about__icon" />
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2 Years working</span>
              </div>
              <div className="about__box">
                <BiBriefcaseAlt className="about__icon" />
                <h3 className="about__title">Compoeleted</h3>
                <span className="about__subtitle">5 + Projects</span>
              </div>
              <div className="about__box">
                <BiSupport className="about__icon" />
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
              </div>
            </div>
            <p className="about__description">
              Frontend developer , I create React web app, I have years
              experience at Reactjs.
            </p>
            <a href="#contact" className="button ">
              Contact Me
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
