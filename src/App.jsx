import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import Servicios from "./paginas/Servicios";
import Tienda from "./paginas/Tienda";
import Nosotros from "./paginas/Nosotros";
import Contacto from "./paginas/Contacto";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
