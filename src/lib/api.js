import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const EPISODE_URL = 'https://rickandmortyapi.com/api/episode';

export const getAllEpisodes = (pageNumber) =>
  axios.get(`${EPISODE_URL}/?page=${pageNumber}`);

export const getAllCharacters = (pageNumber) =>
  axios.get(`${BASE_URL}/?page=${pageNumber}`);

export const getCharacterBio = (characterId) =>
  axios.get(`${BASE_URL}/${characterId}`);
