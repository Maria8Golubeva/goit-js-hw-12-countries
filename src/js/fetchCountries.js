import { invalidRequest } from './notifications.js';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export function fetchCountry(input) {
  return fetch(`${BASE_URL}/name/${input}`)
    .then(response => response.json())
    .catch(error => invalidRequest())
};
    