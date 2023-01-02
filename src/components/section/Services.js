import React from "react";
import { BiCheck, BiRightArrowAlt, BiX } from "react-icons/bi";
// ADD HANDLERS TO SHOW MODAL AND CREATE COMPONENT FOR MODAL AND CARD
function Services() {
  return (
    <section class="services section">
      <span className="section_subtitle">My Services</span>
      <h2 className="section_title">What I offer</h2>

      <div className="services__container container grid">
        <div className="services__card">
          <h3 className="services__title">
            {" "}
            Product <br /> Designer
          </h3>
          <span className="services__button">
            See more <BiRightArrowAlt className="services__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <BiX className="services__modal-close" />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more 2 years of experince.Providing quality work
                to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">web page development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
          <h3 className="services__title">
            UI/UX <br /> Designer
          </h3>
          <span className="services__button">
            See more <BiRightArrowAlt className="services__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <BiX className="services__modal-close" />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more 2 years of experince.Providing quality work
                to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">web page development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
          <h3 className="services__title">
            Visual <br /> Designer
          </h3>
          <span className="services__button">
            See more <BiRightArrowAlt className="services__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <BiX className="services__modal-close" />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more 2 years of experince.Providing quality work
                to clients and companies.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-item">
                  <BiCheck className="services__modal-icon" />
                  <p className="services__modal-info">web page development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
