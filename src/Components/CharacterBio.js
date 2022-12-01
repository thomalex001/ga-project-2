import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterBio } from '../lib/api'; //need to add in API component 

const CharacterBio = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log('test ID is', id);
  useEffect(() => {
    //call api to get single character
    console.log('this is it');
    getSingleCheese(id)
      .then((res) => setCheese(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{cheese.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={cheese.image} alt={cheese.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="plate">
                🍽
              </span>
              Tasting Notes
            </h4>
            <p>{cheese.tastingNotes}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="globe">
                🌍
              </span>
              Origin
            </h4>
            <hr />
            <p>{cheese.origin}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="wave">
                🖐
              </span>
              Added By
            </h4>
            <hr />
            <p>{cheese.user.username}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheeseShow;
