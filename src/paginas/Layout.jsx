import React from "react";
import BarraNavegacion from "../componentes/BarraNavegacion";
import Footer from "../componentes/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <BarraNavegacion />
      <Outlet />
      <Footer></Footer>
    </>
  );
}
