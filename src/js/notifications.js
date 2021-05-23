import { defaults, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.title = 'Oops';
defaults.delay = 2000;
defaults.maxTextHeight = null;

function tooManyMatches() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

function invalidRequest() {
  error({
    text: 'Invalid request. Please enter correct country name!',
  });
}

export { tooManyMatches, invalidRequest };