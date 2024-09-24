import React from "react";
import Tarjeta from "./Tarjeta";
import "./estilosComponentes/bentoInformacion.css";

export default function BentoInformacion({ informacion }) {
  const bentoLogros = informacion.slice(0, 6).map((logro) => {
    const { id, highlight, complemento, clase } = logro;
    return (
      <Tarjeta
        key={id}
        titulo={highlight}
        className={`contendor-tarjeta-bento ${clase}`}
      >
        {complemento}
      </Tarjeta>
    );
  });
  return <div className="contenedor-bento-informacion">{bentoLogros}</div>;
}
