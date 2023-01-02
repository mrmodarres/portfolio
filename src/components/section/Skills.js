import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

function Skills() {
  return (
    <section class="skills section" id="skills">
      <span className="section_subtitle">My abilities</span>
      <h2 className="section_title">My Experience</h2>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
