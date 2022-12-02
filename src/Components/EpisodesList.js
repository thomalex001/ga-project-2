import { getAllEpisodes, getAllCharacters } from '../lib/api';
import { useEffect, useState } from 'react';
import EpisodesCard from './EpisodesCard';
import CharactersCard from './CharactersCard';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getAllEpisodes(page)
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.error(err));
    getAllCharacters()
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  if (characters === null) {
    return <p>Loading...</p>;
  }

  if (episodes === null) {
    return <p>Loading...</p>;
  }

  const charactersUrl = characters.map((character) => {
    const characterUrl = character.url;
    console.log('just characters', characterUrl);
  });
  const episodesCharactersUrl = episodes.map((episode) => {
    const episodeCharacterUrl = episode.characters;
    console.log('episodes characters', Object.values(episodeCharacterUrl));
  });

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
            <p className="page-num">Page:{page}/3</p>
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
          {episodes.map((episode) => (
            <EpisodesCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              airDate={episode.air_date}
              episodeNumber={episode.episode}
              episodeCharacters={episode.characters[0]}
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
            <p className="page-num">Page:{page}/3</p>
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
export default EpisodesList;
