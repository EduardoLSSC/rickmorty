import React, { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="characters">
        {characters.map(character => (
          <div key={character.id} className="character">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
