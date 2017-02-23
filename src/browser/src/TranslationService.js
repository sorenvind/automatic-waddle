import * as url from 'url';

// Interfaces with EmojiService
export function getTranslation(server, inputString) {
  const emojiServiceUrl = url.format({host: server, pathname: '/aaw', query: {q: inputString}});

  return fetch(emojiServiceUrl, {mode: 'cors'})
    .then(response => response.json()) // intentionally missing error-handling :)
    .then(json => json.translated);
}
