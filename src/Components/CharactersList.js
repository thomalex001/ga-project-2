import { getAllCharacters } from '..lib/api';
import { useEffect, useState } from 'react';

const CharactersList = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllCharacters()
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  if (cheeses === null) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <div className="column is-multitline">
          {characters.map((character) => (
            <CharactersCard key={character._id} {...character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersList;
