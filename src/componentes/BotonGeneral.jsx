import React from "react";
import "./estilosComponentes/botonGeneral.css";

export default function BotonGeneral({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
