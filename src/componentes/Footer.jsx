import React from "react";
import BotonGeneral from "./BotonGeneral";
import "./estilosComponentes/footer.css";
import { NavLink } from "react-router-dom";
import logo from "../imagenes/Logo_TopTech.JPG";

export default function Footer() {
  return (
    <footer className="contenedor-footer">
      <div className="contenedor-footer-contacto">
        <img className="logo-footer-toptech" src={logo} alt="Logo TopTech" />
        <NavLink to="/contacto">
          <BotonGeneral className="boton boton-principal boton-general">
            Contactanos
          </BotonGeneral>
        </NavLink>
      </div>
      <div className="contenedor-footer-legal">
        <a>Terminos y condiciones</a>
        <a>Tratamiento de datos</a>
        <a>PQR's</a>
        <a>Política de privacidad</a>
      </div>
    </footer>
  );
}
