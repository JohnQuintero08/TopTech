import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";
import Tarjeta from "../componentes/Tarjeta";
import BotonGeneral from "./BotonGeneral";
import "./estilosComponentes/tarjetasOferta.css";

export default function TarjetasOferta() {
  const tarjetas = data.ofertasImagenes.map((oferta) => {
    const { id, url, textoBoton, to, titulo, descripcion } = oferta;
    return (
      <Tarjeta
        key={id}
        className="contenedor-tarjeta contenedor-tarjeta-oferta"
        /* urlImagen={url} */
        contenidoDireccion={textoBoton}
        direccion={to}
        estiloBoton="boton boton-general boton-oferta"
        titulo={titulo}
        children={descripcion}
      ></Tarjeta>
    );
  });
  return (
    <div className="contenedor-general-tarjetas-oferta">
      <div className="contenedor-tarjetas-oferta">{tarjetas}</div>
      {/*       <NavLink to="tienda">
        <BotonGeneral className="boton">Visita nuestra tienda</BotonGeneral>
      </NavLink> */}
    </div>
  );
}
