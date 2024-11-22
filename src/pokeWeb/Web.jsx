import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Inicio from "./Inicio";
import Footer from "./Footer";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Contacto from "./Contacto";
import Navegacion from "./Nav";
import Gines from "./Gines";
import Domingo from "./Domingo";
import "bootstrap/dist/css/bootstrap.min.css";

function Web() {
  return (
    <>
      <Header />
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
        <Route path="/contacto" element={<Contacto />}>
          <Route path="/contacto/domingo" element={<Domingo />} />
          <Route path="/contacto/gines" element={<Gines />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Web;
