import React from "react";
import { Fade } from "react-awesome-reveal";
import { BsDribbble, BsGithub, BsLinkedin, BsMouse } from "react-icons/bs";
function Home() {
  return (
    <section class="home section" id="home">
      <Fade direction="down">
        <div className="home__container container">
          <div className="home__data">
            <span className="home__greetings">Hello, I'm</span>
            <h1 className="home__name">Mehdi Modarres</h1>
            <h3 className="home__education">Frontend Developer</h3>

            <div className="home__buttons">
              <a
                download=""
                href="../../public/media/MyResume.pdf"
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
            <img src="/media/image/profile.png" alt="" className="home__img" />
          </div>

          <div className="home__social">
            <a href="" className="home__social-link">
              <BsLinkedin />
            </a>
            <a href="" className="home__social-link">
              <BsGithub />
            </a>
            <a href="" className="home__social-link">
              <BsDribbble />
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
