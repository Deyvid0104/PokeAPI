import React from "react";
import { Outlet } from "react-router-dom";
import styles from './styles/contacto.module.css';

function Contacto() {
  return (
    <div  className={styles.titulo}>
      <h2>ESTAS EN CONTACTO CON:</h2>
      <hr />
      <Outlet />
    </div>
  );
}

export default Contacto;