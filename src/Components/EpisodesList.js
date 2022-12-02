import { getAllEpisodes } from '../lib/api';
import { useEffect, useState } from 'react';
import EpisodesCard from './EpisodesCard';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllEpisodes(page)
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.error(err));
  }, [page]);

  if (episodes === null) {
    return <p>Loading...</p>;
  }

  const incrementPage = () => {
    if (page >= 3) {
      return (page = 3);
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
              characters={episode.characters}
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
