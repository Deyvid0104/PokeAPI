import React from "react";
import { Outlet } from "react-router-dom";

function Contacto() {
  return (
    <div>
      <h2>ESTAS EN CONTACTO CON:</h2>
      <hr />
      <Outlet />
    </div>
  );
}

export default Contacto;