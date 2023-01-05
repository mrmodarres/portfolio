import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function ServicesCard({ data, setModalData, setShowModal }) {
  const modalHandle = () => {
    setModalData(data.modalData);
    setShowModal(true);
  };
  return (
    <div className="services__card">
      <h3 className="services__title">{data.title}</h3>
      <span className="services__button" onClick={modalHandle}>
        See more <BiRightArrowAlt className="services__icon" />
      </span>
    </div>
  );
}

export default ServicesCard;
