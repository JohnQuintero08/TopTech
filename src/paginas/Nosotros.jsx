import React from "react";
import "./estilosPaginas/nosotros.css";

export default function Nosotros() {
  return (
    <>
      <div className="contenedor-nosotros-informacion">
        <h2>TOPTECH</h2>

        <h3>Nosotros</h3>
        <p>
          En TopTech, somos líderes en la venta, servicio técnico y calibración
          de equipos de fibra óptica. Con años de experiencia en el sector,
          ofrecemos soluciones innovadoras y de alta calidad para satisfacer las
          necesidades de nuestros clientes. Nuestro equipo de expertos garantiza
          un servicio confiable y personalizado, respaldado por la tecnología
          más avanzada y los estándares más rigurosos de la industria. En
          TopTech, trabajamos para optimizar tus proyectos de telecomunicaciones
          con productos de primera y un soporte técnico insuperable.
        </p>
      </div>
      <div className="contenedor-nosotros-secundario">
        <div className="contenedor-nosotros-imagenes">
          <img
            src="src/imagenes/Imagen_Trabajo_1.jpg"
            className="nosotros-imagen-uno"
          />
          <img
            src="src/imagenes/Imagen_Trabajo_2.jpg"
            className="nosotros-imagen-dos"
          />
        </div>
        <div className="contenedor-nosotros-texto-secundario">
          <h3>Servicios de alta calidad</h3>
          <p>Nuestra tecnologia de calibracion...</p>
          <h3>Certificaciones...</h3>
          <p>
            Estamos acreditados y ademas trabajamos com empresas europeas de
            alta calidad
          </p>
          <p>Permitenos asesorarte</p>
        </div>
      </div>
    </>
  );
}
