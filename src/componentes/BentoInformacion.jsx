import React from "react";
import Tarjeta from "./Tarjeta";
import "./estilosComponentes/bentoInformacion.css";

const logros = [
  {
    id: 1,
    descripcion:
      "Líder en soluciones de inteligencia artificial a nivel mundial.",
    clase: "item-ia",
  },
  {
    id: 2,
    descripcion: "Expansión a 30 países en los últimos 5 años.",
    clase: "item-ib",
  },
  {
    id: 3,
    descripcion: "Desarrollo de software premiado por su innovación.",
    clase: "item-ic",
  },
  {
    id: 4,
    descripcion: "Colaboraciones estratégicas con gigantes tecnológicos.",
    clase: "item-id",
  },
  {
    id: 5,
    descripcion: "15 años de excelencia en el sector tecnológico.",
    clase: "item-ie",
  },
  {
    id: 6,
    descripcion: "Reconocimiento por sostenibilidad en la industria.",
    clase: "item-if",
  },
  {
    id: 7,
    descripcion: "Patentes innovadoras en tecnología de automatización.",
    clase: "item-ig",
  },
];

export default function BentoInformacion() {
  const bentoLogros = logros.map((logro) => {
    const { id, descripcion, clase } = logro;
    return (
      <Tarjeta key={id} className={`contendor-tarjeta-bento ${clase}`}>
        {descripcion}
      </Tarjeta>
    );
  });
  return <div className="contenedor-bento-informacion">{bentoLogros}</div>;
}
