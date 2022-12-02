import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = (pageNumber) =>
  axios.get(`${BASE_URL}/?page=${pageNumber}`);

export const getCharacterBio = (characterId) =>
  axios.get(`${BASE_URL}/${characterId}`);
