import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./estilosComponentes/barraNavegacion.css";
import BotonGeneral from "./BotonGeneral";
/* Problema con el formato del logo */
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
            <FaShoppingCart className="icono" />
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
            to="tienda"
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
            Sobre Nosotros
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
