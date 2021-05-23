import { invalidRequest } from './notifications.js';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export function fetchCountry(input) {
  return fetch(`${BASE_URL}/name/${input}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      invalidRequest();
    }
  });
}