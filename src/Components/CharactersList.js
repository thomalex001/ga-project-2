import { getAllCharacters } from '../lib/api';
import { useEffect, useState } from 'react';
import CharactersCard from './CharactersCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCharacters(page)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, [page]);

  if (characters === null) {
    return <p>Loading...</p>;
  }

  const incrementPage = () => {
    if (page >= 42) {
      return (page = 42);
    }
    setPage(page + 1);
  };
  const decrementPage = () => {
    if (page <= 1) {
      return (page = 1);
    }
    setPage(page - 1);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="page-top-div">
          <div className="page-top">
            <button className="dec" onClick={decrementPage}>
              ➡
            </button>
            <div className="portal1">
              <img
                className="portalimg"
                src="https://www.pngkey.com/png/full/3-36968_rick-and-morty-portal-edible-printing-rick-and.png"
                alt="portal"
              />
            </div>
            <p className="page-num">Page:{page}/42</p>
            <button className="inc" onClick={incrementPage}>
              ➡
            </button>
            <div className="portal2">
              <img
                className="portalimg"
                src="https://www.pngkey.com/png/full/3-36968_rick-and-morty-portal-edible-printing-rick-and.png"
                alt="portal"
              />
            </div>
          </div>
        </div>
        <div className="column is-multitline">
          {characters.map((character) => (
            <CharactersCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
        <div className="page-bottom-div">
          <div className="page-bottom">
            <button className="dec" onClick={decrementPage}>
              ➡
            </button>
            <div className="portal1">
              <img
                className="portalimg"
                src="https://www.pngkey.com/png/full/3-36968_rick-and-morty-portal-edible-printing-rick-and.png"
                alt="portal"
              />
            </div>
            <p className="page-num">Page:{page}/42</p>
            <button className="inc" onClick={incrementPage}>
              ➡
            </button>
            <div className="portal2">
              <img
                className="portalimg"
                src="https://www.pngkey.com/png/full/3-36968_rick-and-morty-portal-edible-printing-rick-and.png"
                alt="portal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersList;
