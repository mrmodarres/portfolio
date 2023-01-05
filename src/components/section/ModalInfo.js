import React from "react";
import { BiCheck } from "react-icons/bi";

function ModalInfo({ data }) {
  return (
    <li className="services__modal-item">
      <BiCheck className="services__modal-icon" />
      <p className="services__modal-info">{data}</p>
    </li>
  );
}

export default ModalInfo;
