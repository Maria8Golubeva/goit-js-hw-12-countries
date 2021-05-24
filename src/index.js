import './sass/main.scss';
import { refs } from './js/refs.js';
import { fetchCountry } from './js/fetchCountries.js';
import { tooManyMatches } from './js/notifications.js';

import countryTpl from './templates/country.hbs';
import countryListTpl from './templates/countryList.hbs';

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInputTyping, 500));

function onInputTyping(el) {
  const input = el.target.value.trim();
  refs.countries.innerHTML = '';

  if (!input) {
    return;
  }
  
  fetchCountry(input).then(renderCountriesOrCard);
}

function renderCountriesOrCard(country) {
  if (country.length > 10) {
    tooManyMatches();
  } else if (country.length === 1) {
    const markup = countryTpl(country);
    refs.countries.innerHTML = markup;
  } else {
    const markup = countryListTpl(country);
    refs.countries.innerHTML = markup;
  }
}
