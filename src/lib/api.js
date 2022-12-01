const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = () => axios.get(`${BASE_URL}/cheeses`);
