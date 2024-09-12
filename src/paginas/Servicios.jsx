import React from "react";
import Footer from "../componentes/Footer";
import TarjetasServicios from "../componentes/TarjetasServicios";
import data from "../data";

export default function Servicios() {
  return (
    <>
      <section>
        <h2>Ofrecemos servicios se calibración y otros</h2>
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
      <Footer></Footer>
    </>
  );
}
