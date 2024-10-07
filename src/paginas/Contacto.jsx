import React from "react";
import "./estilosPaginas/contacto.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";

export default function Contacto() {
  return (
    <div className="contenedor-contacto">
      <div>
        <h3>Contáctenos</h3>
        <p>Estamos disponibles para atender sus inquietudes.</p>
      </div>
      <h4>
        <FaLocationDot className="icono-contacto" />
        Ubicación
      </h4>
      <p>Cra 15 No. 9 - 18 Zipaquirá, Cundinamarca, Colombia</p>
      <h4>
        <IoCall className="icono-contacto" />
        Telefono o {/* <IoLogoWhatsapp className="icono-contacto" /> */}
        Whatsapp
      </h4>
      <p>+57 316 294 5151</p>
      <h4>
        <MdEmail className="icono-contacto" />
        Correo electrónico
      </h4>
      <p>ventas@toptech.com.co</p>
      <p>administracion@toptech.com.co</p>
      <h4>
        <RiCalendarScheduleFill className="icono-contacto" />
        Horario de atención
      </h4>
      <p>Lunes a Viernes, 8:00am a 5:00pm</p>
    </div>
  );
}
