import { getAllCharacters } from '../lib/api';
import { useEffect, useState } from 'react';
import CharactersCard from './CharactersCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllCharacters()
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []); 

  if (characters === null) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <div className="column is-multitline">
          {characters.map((character) => (
            <CharactersCard key={character.results.id} name={character.results.name} image={character.results.image}/>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersList;
