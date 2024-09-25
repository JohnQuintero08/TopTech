import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import "./estilosComponentes/barraNavegacion.css";
import BotonGeneral from "./BotonGeneral";
import logo from "../imagenes/Logo_TopTech.JPG";

export default function BarraNavegacion() {
  const [isRetracted, setIsRetracted] = useState(false);
  function changeRetracted() {
    setIsRetracted((prev) => !prev);
  }
  return (
    <>
      <nav>
        <div className="contenedor-menu">
          <BotonGeneral
            onClick={changeRetracted}
            className="boton boton-icono boton-icono-menu"
          >
            <IoMenu className="icono" />
          </BotonGeneral>
          <NavLink to="/">
            <img className="logo-toptech" src={logo} alt="Logo TopTech" />
            {/* Logo */}
          </NavLink>
          <BotonGeneral className="boton boton-icono">
            <BsCart4 className="icono" />
          </BotonGeneral>
        </div>
        <div
          className={
            isRetracted ? "contenedor-opciones-cerrado" : "contendor-opciones"
          }
        >
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="marcas"
          >
            Marcas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="tienda"
          >
            Tienda
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="servicios"
          >
            Servicios
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="nosotros"
          >
            Sobre nosotros
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "link-navegacion " + (isActive ? " link-activo" : null)
            }
            to="contacto"
          >
            Contacto
          </NavLink>
        </div>
      </nav>
    </>
  );
}
