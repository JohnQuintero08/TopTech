import React from "react";
import Tarjeta from "./Tarjeta";
import "./estilosComponentes/TarjetasServicios.css";
import BotonGeneral from "./BotonGeneral";
import { NavLink } from "react-router-dom";

const servicios = [
  {
    id: 1,
    clase: "item-a",
    titulo: "Desarrollo Web",
    descripcion: "Creación y mantenimiento de sitios web personalizados.",
  },
  {
    id: 2,
    clase: "item-b",
    titulo: "Consultoría IT",
    descripcion: "Asesoría en soluciones tecnológicas y estrategias digitales.",
  },
  {
    id: 3,
    clase: "item-c",
    titulo: "Soporte Técnico",
    descripcion:
      "Resolución de problemas y mantenimiento de sistemas informáticos.",
  },
  {
    id: 4,
    clase: "item-a",
    titulo: "Desarrollo de Software",
    descripcion: "Creación de aplicaciones y sistemas a medida.",
  },
  {
    id: 5,
    clase: "item-b",
    titulo: "Seguridad Informática",
    descripcion: "Protección de datos y redes contra amenazas cibernéticas.",
  },
  {
    id: 6,
    clase: "item-c",
    titulo: "Automatización de Procesos",
    descripcion:
      "Optimización de flujos de trabajo mediante herramientas tecnológicas.",
  },
];
export default function TarjetasServicios() {
  const tarjetas = servicios.slice(0, 3).map((servicio) => {
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
