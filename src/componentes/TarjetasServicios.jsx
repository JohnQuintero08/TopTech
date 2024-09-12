import React from "react";
import Tarjeta from "./Tarjeta";
import "./estilosComponentes/TarjetasServicios.css";
import BotonGeneral from "./BotonGeneral";
import { NavLink } from "react-router-dom";

export default function TarjetasServicios({ servicios }) {
  const tarjetas = servicios.map((servicio) => {
    const { id, titulo, descripcion, clase } = servicio;
    return (
      <Tarjeta
        className={`contenedor-tarjeta-servicio ${clase}`}
        key={id}
        titulo={titulo}
      >
        {descripcion}
      </Tarjeta>
    );
  });
  return (
    <div className="contenedor-general-tarjeta-servicios">
      <div className="contenedor-tarjetas-servicios">{tarjetas}</div>
      <NavLink to="servicios">
        <BotonGeneral className="boton">Conoce nuestros servicios</BotonGeneral>
      </NavLink>
    </div>
  );
}
