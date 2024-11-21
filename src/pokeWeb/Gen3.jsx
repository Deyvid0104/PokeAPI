import React, { useEffect, useState } from 'react';
import { Pokemon } from './Pokemon';
import styles from './styles/gen.module.css'; // Importar el módulo CSS desde la carpeta styles

const Gen3 = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      const promises = [];
      // Obtener 10 Pokémon aleatorios de la Gen 3 (252-386)
      for (let i = 0; i < 10; i++) {
        const randomId = Math.floor(Math.random() * 135) + 252; // IDs de 252 a 386
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

export default Gen3;