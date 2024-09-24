import React from "react";
import Carrusel from "../componentes/Carrusel";
import BotonGeneral from "../componentes/BotonGeneral";
import TarjetasOferta from "../componentes/TarjetasOferta";
import TarjetasServicios from "../componentes/TarjetasServicios";
import BentoInformacion from "../componentes/BentoInformacion";
import Footer from "../componentes/Footer";
import data from "../data";
import "./estilosPaginas/home.css";
import "../componentes/estilosComponentes/botonGeneral.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <h1>
          Expertos en instrumentos de medida para redes de voz, imagen y datos y
          metrología de telecomunicaciones.
        </h1>
        <div className="contenedor-botones-header">
          <NavLink to="tienda">
            <BotonGeneral className="boton boton-general boton-principal">
              Tienda
            </BotonGeneral>
          </NavLink>
          <NavLink to="servicios">
            <BotonGeneral className="boton boton-general boton-principal">
              Servicios
            </BotonGeneral>
          </NavLink>
        </div>
      </header>

      <section className="seccion-ofertas">
        <Carrusel arrayOfImages={data.carouselImages}></Carrusel>
        <TarjetasOferta></TarjetasOferta>
      </section>

      <section className="seccion-servicios">
        <TarjetasServicios
          servicios={data.servicios.slice(0, 3)}
          hasBoton={true}
          claseServicios="primera"
        ></TarjetasServicios>
      </section>

      <section className="seccion-informacion">
        <BentoInformacion informacion={data.logros}></BentoInformacion>
      </section>
    </>
  );
}
