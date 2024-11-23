import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'; // Importar Card de Bootstrap
import styles from './styles/pokemon.module.css'; // Importar estilos

export const Pokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          id: data.id,
          nombre: data.name,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png",
        });
      });
  }, [id]);

  if (!pokemon) return null;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={pokemon.img} alt={pokemon.nombre} />
      <Card.Body>
        <Card.Title className={styles.nombre}>{pokemon.nombre}</Card.Title>
        <Card.Text className={styles.atributo}>
          ID: {pokemon.id}
        </Card.Text>
        <Card.Text className={styles.atributo}>
          HP: {pokemon.hp}
        </Card.Text>
        <Card.Text className={styles.atributo}>
          Ataque: {pokemon.ataque}
        </Card.Text>
        <Card.Text className={styles.atributo}>
          Defensa: {pokemon.defensa}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};