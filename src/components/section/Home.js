import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsDribbble, BsGithub, BsLinkedin, BsMouse } from "react-icons/bs";
function Home() {
  return (
    <section className="home section" id="home">
      <Fade direction="down">
        <div className="home__container container">
          <div className="home__data">
            <span className="home__greetings">Hello, I'm</span>
            <h1 className="home__name">Mehdi Modarres</h1>
            <h3 className="home__education">Frontend Developer</h3>

            <div className="home__buttons">
              <a
                download="MyResume.pdf"
                href={MehdiResueme}
                className="button button--ghost"
              >
                Download CV
              </a>
              <a href="#about" className="button">
                About me
              </a>
            </div>
          </div>

          <div className="home__handle">
            <img
              src="/media/image/profile.png"
              loading="lazy"
              alt=""
              className="home__img"
            />
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/mehdi-modarres/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/mrmodarres"
              className="home__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://gitlab.com/mr.modarres1994"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <SiGitlab />
            </a>
          </div>
          {/* </Fade> */}
          <a href="#about" className="home__scroll">
            <BsMouse className="home__scroll-icon" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </Fade>
    </section>
  );
}

export default Home;
