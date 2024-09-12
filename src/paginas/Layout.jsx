import React from "react";
import BarraNavegacion from "../componentes/BarraNavegacion";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <BarraNavegacion />
      <Outlet />
    </>
  );
}
