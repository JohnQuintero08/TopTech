import React from "react";
import Tarjeta from "./Tarjeta";
import "./estilosComponentes/TarjetasServicios.css";
import BotonGeneral from "./BotonGeneral";
import { NavLink } from "react-router-dom";

export default function TarjetasServicios({
  servicios,
  hasBoton,
  claseServicios,
}) {
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
      <h3>Conozca todos nuestros servicios</h3>
      <div className={`contenedor-tarjetas-servicios ${claseServicios}`}>
        {tarjetas}
      </div>
      {hasBoton && (
        <NavLink className="navlink-boton-servicios" to="servicios">
          <BotonGeneral className="boton boton-general">Servicios</BotonGeneral>
        </NavLink>
      )}
    </div>
  );
}
