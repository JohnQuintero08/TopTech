import React from "react";
import TarjetasServicios from "../componentes/TarjetasServicios";
import Tarjeta from "../componentes/Tarjeta";
import data from "../data";
import "./estilosPaginas/servicios.css";
import BotonGeneral from "../componentes/BotonGeneral";
import { NavLink } from "react-router-dom";

function TarjetasIndividualesServicios({
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
  return <>{tarjetas}</>;
}

export default function Servicios() {
  return (
    <div className="contenedor-pagina-servicios">
      <section className="contenedor-header-pagina-servicios">
        <h2>
          Servicios de metrología y <br />
          mantenimiento de <br />
          equipos de <br /> fibra óptica
        </h2>
      </section>
      <section className="contenedor-servicios">
        <TarjetasIndividualesServicios
          servicios={data.servicios.slice(0, 3)}
        ></TarjetasIndividualesServicios>
      </section>
      <section className="contenedor-servicios contenedor-dos">
        <TarjetasIndividualesServicios
          servicios={data.servicios.slice(3, 6)}
        ></TarjetasIndividualesServicios>
      </section>
      <section className="contenedor-servicios-atencion">
        <h3>
          Nuestro equipo <br />
          está preparado para atenderte
        </h3>
        <img src="src/imagenes/Personal_trabajando.jpg" />
        <NavLink className="navlink-servicios-contacto" to="../contacto">
          <BotonGeneral className="boton boton-general boton-asesor">
            Habla con un asesor
          </BotonGeneral>
        </NavLink>
      </section>
      <section className="contenedor-servicios-clientes">
        <h4>Nuestros clientes</h4>
        <ul>
          <li>Cliente 1</li>
          <li>Cliente 2</li>
          <li>Cliente 3</li>
        </ul>
      </section>
    </div>
  );
}
