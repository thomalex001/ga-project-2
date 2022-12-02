import { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodesCard = ({ name, airDate, episodeNumber, episodeCharacters }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>
      <div className="card-content">
        <h4 className="card-header-title">{airDate}</h4>
      </div>
      <div className="card-content">
        <h4 className="">{episodeNumber}</h4>
      </div>
      <div className="card-content">
        <img className="" src={episodeCharacters} />
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
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-content">
          <h4 className="card-header-title">{airDate}</h4>
        </div>
        <div className="card-content">
          <h4 className="">{episodeNumber}</h4>
        </div>
        <div className="card-content">
          <img src={displayCharacter} alt={`character from ${name}`} />
        </div>
      </div>
    </div>
  );
};
