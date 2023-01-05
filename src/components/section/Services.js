import React, { useState } from "react";

import Modal from "../section-components/Modal";
import ServicesCard from "../section-components/ServicesCard";
// ADD HANDLERS TO SHOW MODAL AND CREATE COMPONENT FOR MODAL AND CARD
const servicesData = [
  {
    title: "Product Designer",
    modalData: {
      title: "Product Designer",
      desription:
        "Services with more 2 years of experince.Providing quality work to clients and companies.",
      info: ["I develop the user interface", "web page development"],
    },
  },
  {
    title: "  Visual Designer",
    modalData: {
      title: "Product Designer",
      desription:
        "Services with more 2 years of experince.Providing quality work to clients and companies.",
      info: ["I develop the user interface", "web page development"],
    },
  },
  {
    title: "UI/UX Designer",
    modalData: {
      title: "Product Designer",
      desription:
        "Services with more 2 years of experince.Providing quality work to clients and companies.",
      info: ["I develop the user interface", "web page development"],
    },
  },
];
function Services() {
  const [showModal, setshowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  return (
    <section className="services section">
      <span className="section_subtitle">My Services</span>
      <h2 className="section_title">What I offer</h2>

      <div className="services__container container grid">
        {servicesData.map((card, index) => (
          <ServicesCard
            data={card}
            key={`services_card_${index}`}
            setModalData={setModalData}
            setShowModal={setshowModal}
          />
        ))}
      </div>

      <Modal
        show={showModal}
        setShow={setshowModal}
        modalData={modalData}
        setModalData={setModalData}
      />
    </section>
  );
}

export default Services;
