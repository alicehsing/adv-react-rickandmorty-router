import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../App.css';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <div className={styles.list}>
            <h2>Character List</h2>
            {characters.map((character) => {
              return (
                <section key={character.id}>
                  <Link to={`/characters/${character.id}`}>
                    <h3>{character.name}</h3>
                  </Link>
                  <span>Species: {character.species}</span>
                  <p>Status: {character.status}</p>
                </section>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
