// import React from 'react'
import { Pokemon } from './Pokemon';
import styles from './styles/inicio.module.css'; // Importar estilos
function Inicio() {
    return (
      <div className={styles.inicio}>
        <h1>Bienvenido al mundo de Pokémon</h1>
        <Pokemon id={Math.floor(Math.random() * 151) + 1} />
      </div>
    );
  }
  

export default Inicio