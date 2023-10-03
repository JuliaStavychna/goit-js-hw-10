import axios from 'axios';

const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_G2G0cDpvIYgN7fza4dikrLECKEmYCFX6embSg8vuddUyAdl7k2W6CeocDW9Id921';

export function fetchBreeds() {
  return axios
    .get(`${URL}/breeds`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${URL}/images/search`, {
      params: {
        api_key: API_KEY,
        breed_ids: breedId,
      },
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}
