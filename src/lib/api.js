import axios from 'axios';


const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = () => axios.get(`${BASE_URL}`);
export const getCharacterBio = (characterId) =>
  axios.get(`${BASE_URL}/${characterId}`);
