import React from "react";
import Carrusel from "../componentes/Carrusel";
import TarjetasOferta from "../componentes/TarjetasOferta";
import TarjetasServicios from "../componentes/TarjetasServicios";
import BentoInformacion from "../componentes/BentoInformacion";
import Footer from "../componentes/Footer";
import data from "../data";
import "./estilosPaginas/home.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>
          Empresa lider en innovación y servicos de venta de productos para la
          industria tecnologica.
        </h1>
        <Carrusel
          className="carousel-header"
          arrayOfImages={data.carouselImages}
        ></Carrusel>
      </header>

      <section className="seccion-ofertas">
        <TarjetasOferta></TarjetasOferta>
      </section>

      <section className="seccion-servicios">
        <TarjetasServicios
          servicios={data.servicios.slice(0, 3)}
        ></TarjetasServicios>
      </section>

      <section className="seccion-informacion">
        <BentoInformacion></BentoInformacion>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
