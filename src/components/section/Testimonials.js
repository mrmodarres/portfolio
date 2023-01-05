import React from "react";

function Testimonials() {
  return (
    <section className="testimonial section">
      <span className="section_subtitle">My clients say</span>
      <h2 className="section_title">Testimonial</h2>
      <div className="testimonial__container container">
        <div className="testimonial__card">
          <img src="" className="testimonial__img" />
          <h3 className="testimonial__name">John Doe</h3>
          <p className="testimonial__description">
            A realy good job, all aspects of the project were followed step by
            step and with good results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
