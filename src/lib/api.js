import axios from 'axios';


const BASE_URL = 'https://rickandmortyapi.com/api/character';
const EPISODE_URL = 'https://rickandmortyapi.com/api/episode';

export const getAllCharacters = () => axios.get(`${BASE_URL}`);
export const getAllEpisodes = () => axios.get(`${EPISODE_URL}`);
export const getCharacterBio = (characterId) =>
  axios.get(`${BASE_URL}/${characterId}`);
