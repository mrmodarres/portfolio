import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <span className="section_subtitle">My abilities</span>
      <h2 className="section_title">My Experience</h2>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Basic skills</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Advanced</span>
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
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Tailwind</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Gitlab - Github</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Responsive</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Material-UI</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">React Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">ReactJS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">NextJs</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Typescript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Redux-toolkit</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Axios</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">SOLID</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Storybook</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Styled component</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Other skills</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Strapi</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Wordpress</h3>
                  <span className="skills__level">Intermediate</span>
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
