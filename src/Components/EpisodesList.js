import { getAllEpisodes } from '../lib/api';
import { useEffect, useState } from 'react';
import EpisodesCard from './EpisodesCard';


const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    getAllEpisodes()
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  if (episodes === null) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section">
      <div className="container">
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
      </div>
    </section>
  );
};
export default EpisodesList;
