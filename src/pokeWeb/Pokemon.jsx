import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'; // Importar Card de Bootstrap
// import styles from './styles/pokemon.module.css'; // Importar estilos

export const Pokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          id: data.id,
          name: data.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png",
        });
      });
  }, [id]);

  if (!pokemon) return null;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={pokemon.img} alt={pokemon.name} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          ID: {pokemon.id}
        </Card.Text>
        <Card.Text>
          HP: {pokemon.hp}
        </Card.Text>
        <Card.Text>
          Ataque: {pokemon.attack}
        </Card.Text>
        <Card.Text>
          Defensa: {pokemon.defense}
        </Card.Text>
      </Card.Body>
    </Card>
    // <div className={styles['pokemon-card']}> {/* Aplicar clase de estilo */}
    //   <img src={pokemon.img} alt={pokemon.name} />
    //   <h3>{pokemon.name}</h3>
    //   <p>ID: {pokemon.id}</p>
    //   <p>HP: {pokemon.hp}</p>
    //   <p>Ataque: {pokemon.attack}</p>
    //   <p>Defensa: {pokemon.defense}</p>
    // </div>
  );
};