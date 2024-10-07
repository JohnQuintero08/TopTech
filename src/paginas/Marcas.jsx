import React from "react";
import "./estilosPaginas/marcas.css";
import Tarjeta from "../componentes/Tarjeta";
import data from "../data";
import { NavLink } from "react-router-dom";

function MarcasTarjetas() {
  const tarjetasDeMarcas = data.marcas.map((marca) => {
    return (
      <NavLink className="link-contenedor-tarjeta-marca">
        <Tarjeta
          className="contenedor-tarjeta-marca"
          titulo={marca.nombreMarca}
        ></Tarjeta>
      </NavLink>
    );
  });

  return <>{tarjetasDeMarcas}</>;
}

export default function Marcas() {
  return (
    <div className="contenedor-marcas">
      <h2>Marcas</h2>
      <div className="contenedor-marcas-tarjetas">
        <MarcasTarjetas />
      </div>
    </div>
  );
}
