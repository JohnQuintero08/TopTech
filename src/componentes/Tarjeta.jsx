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
      {urlImagen && <img src={urlImagen} alt={alt} />}
      <p className="tarjeta-titulo">{titulo}</p>
      <p className="tarjeta-contenido">{children}</p>
      {estiloBoton && (
        <BotonGeneral className={`${estiloBoton} boton-tarjeta`}>
          <NavLink to={direccion}>{contenidoDireccion}</NavLink>
        </BotonGeneral>
      )}
    </div>
  );
}
