import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
// CREATE WORK CARD AND TABS AND DEFAULT DATA
function Work() {
  return (
    <section className="work section" id="work">
      <span className="section_subtitle">My Portfolio</span>
      <h2 className="section_title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item active__work">All</span>
        <span className="work__item">Web</span>
        <span className="work__item">Movil</span>
        <span className="work__item">Design</span>
      </div>
      <div className="work__container container grid">
        <div className="work__card">
          <img src="" alt="TestWork1" className="work__img" />
          <h3 className="work__title">Web design</h3>
          <a href="#" className="work__button">
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card">
          <img src="" alt="TestWork1" className="work__img" />
          <h3 className="work__title">App movil</h3>
          <a href="#" className="work__button">
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card">
          <img src="" alt="TestWork1" className="work__img" />
          <h3 className="work__title">Brand design</h3>
          <a href="#" className="work__button">
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card">
          <img src="" alt="TestWork1" className="work__img" />
          <h3 className="work__title">Web design</h3>
          <a href="#" className="work__button">
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card">
          <img src="" alt="TestWork1" className="work__img" />
          <h3 className="work__title">App movil</h3>
          <a href="#" className="work__button">
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
