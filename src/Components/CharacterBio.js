import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterBio } from '../lib/api'; //need to add this in API ==> export const getCharacterBio = (characterId) => axios.get(`${BASE_URL}/${characterId}`);

const CharacterBio = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log('console logging the ID =>', id);
  useEffect(() => {
    //call api to get single character
    getCharacterBio(id)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [id]);


  if (character === null) {
    return <p>Loading...</p>;
  }


  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{character.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={character.image} alt={character.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="status-icon"> {/* it would be nice to have a red cross or green tick depending on DEAD or ALIVE */}
                ❌✅  
              </span>
              Status
            </h4>
            <p>{character.status}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="specices-icon">
                ❓
              </span>
              Species
            </h4>
            <hr />
            <p>{character.species}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="gender-icon">
                ♀♂
              </span>
              Gender
            </h4>
            <hr />
            <p>{character.gender}</p>
            {/* we can also add Origin, Location and which episode they were in */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterBio;
