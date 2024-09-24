import React from "react";
import Footer from "../componentes/Footer";
import TarjetasServicios from "../componentes/TarjetasServicios";
import data from "../data";
import "./estilosPaginas/servicios.css";

export default function Servicios() {
  return (
    <div className="contenedor-pagina-servicios">
      <section className="contenedor-header-pagina-servicios">
        <h2>
          Servicios de metrología y mantenimiento de equipos de fibra óptica
        </h2>
      </section>
      <section>
        <TarjetasServicios
          servicios={data.servicios.slice(0, 3)}
          hasBoton={false}
          claseServicios="primera"
        ></TarjetasServicios>
      </section>
      <section>
        <TarjetasServicios
          servicios={data.servicios.slice(3, 6)}
          hasBoton={false}
          claseServicios="segunda"
        ></TarjetasServicios>
      </section>
    </div>
  );
}
