import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import ModalInfo from "../section/ModalInfo";

function Modal({ show, setShow, modalData, setModalData }) {
  console.log(modalData);
  const closeHandle = () => {
    setShow(false);
    setModalData(null);
  };
  return (
    <>
      <div
        className="services__modal"
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
        }}
      >
        {modalData !== null && (
          <div className="services__modal-content">
            <BiX className="services__modal-close" onClick={closeHandle} />
            <h3 className="services__modal-title">{modalData.title}</h3>
            <p className="services__modal-description">
              {modalData.desription}
            </p>
            <ul className="services__modal-list">
              {modalData.info.map((item, index) => (
                <ModalInfo data={item} key={`modal_info_${index}`} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
