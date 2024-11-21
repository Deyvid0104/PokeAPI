import React from 'react';
import styles from './styles/header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo_pokemon.png" alt="Logo Pokémon" />
    </header>
  );
}

export default Header;