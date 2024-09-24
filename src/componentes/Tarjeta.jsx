import React from "react";
import BotonGeneral from "./BotonGeneral";
import "./estilosComponentes/tarjeta.css";
import { NavLink } from "react-router-dom";

export default function Tarjeta({
  titulo,
  children,
  urlImagen,
  contenidoDireccion,
  direccion,
  className,
  estiloBoton,
  alt,
}) {
  return (
    <div className={className}>
      <p className="tarjeta-titulo">{titulo}</p>
      <p className="tarjeta-contenido">{children}</p>
      {urlImagen && <img src={urlImagen} alt={alt} />}
      {estiloBoton && (
        <NavLink to={direccion}>
          <BotonGeneral className={`${estiloBoton} boton-tarjeta boton-oferta`}>
            {contenidoDireccion}
          </BotonGeneral>
        </NavLink>
      )}
    </div>
  );
}
