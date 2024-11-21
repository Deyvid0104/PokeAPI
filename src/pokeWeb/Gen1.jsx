import React, { useEffect, useState } from 'react';
import { Pokemon } from './Pokemon';
import styles from './styles/gen.module.css'; // Importar el módulo CSS


const Gen1 = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      const promises = [];
      // Obtener 10 Pokémon aleatorios de la Gen 1 (1-151)
      for (let i = 0; i < 10; i++) {
        const randomId = Math.floor(Math.random() * 151) + 1; // IDs de 1 a 151
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()));
      }
      const results = await Promise.all(promises);
      setPokemons(results);
    };
    fetchRandomPokemons();
  }, []);

  return (
    <div className={styles.pokemoncards}>
      {pokemons.map(pokemon => (
        <div className={styles.card} key={pokemon.id}>
          <Pokemon id={pokemon.id} />
        </div>
      ))}
    </div>
  );
};

export default Gen1;