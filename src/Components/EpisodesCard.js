import { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodesCard = ({ name, airDate, episodeNumber, characters }) => {
  const [displayCharacter, setDisplayCharacter] = useState(null);

  const randomCharacter =
    characters[Math.ceil(Math.random() * characters.length)];

  useEffect(() => {
    axios.get(randomCharacter).then((res) => {
      console.log({ res });
      setDisplayCharacter(res.data.image);
    });
  }, []);

  return (
    <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'>
      <div
        className='card'
        style={{ minHeight: '430px' }}>
        <div className='episode-card-header'>
          <div className='episode-card-content'>
            <h4 className='episode-header'>{episodeNumber}</h4>
            <h4 className='episode-info'>{name}</h4>
            <h4 className='episode-air-date'>First air date: </h4>
            <h4 className='episode-info'>{airDate}</h4>
          </div>
        </div>
        <div className='card-content'>
          <img
            src={displayCharacter}
            alt={`character from ${name}`}
          />
        </div>
      </div>
    </div>
  );
};
export default EpisodesCard;
