import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";
import Tarjeta from "../componentes/Tarjeta";
import BotonGeneral from "./BotonGeneral";
import "./estilosComponentes/tarjetasOferta.css";

export default function TarjetasOferta() {
  const tarjetas = data.ofertasImagenes.map((oferta) => {
    return (
      <Tarjeta
        key={oferta.id}
        className="contenedor-tarjeta"
        urlImagen={oferta.url}
        contenidoDireccion={oferta.textoBoton}
        direccion={oferta.to}
        estiloBoton="boton"
      ></Tarjeta>
    );
  });
  return (
    <div className="contenedor-general-tarjetas-oferta">
      <div className="contenedor-tarjetas-oferta">{tarjetas}</div>
      <NavLink to="tienda">
        <BotonGeneral className="boton">Visita nuestra tienda</BotonGeneral>
      </NavLink>
    </div>
  );
}
