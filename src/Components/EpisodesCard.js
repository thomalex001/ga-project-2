// import { Link } from 'react-router-dom';

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
        <img className=""src={episodeCharacters} />
      </div>
    </div>
  </div>
);
export default EpisodesCard;
