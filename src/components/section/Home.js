import React from "react";
import { BsDribbble, BsGithub, BsLinkedin, BsMouse } from "react-icons/bs";
function Home() {
  return (
    <section class="home section" id="home">
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
          <img src="/media/image/profile.jpg" alt="" className="home__img" />
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
        <a href="#about" className="home__scroll">
          <BsMouse className="home__scroll-icon" />
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

export default Home;
