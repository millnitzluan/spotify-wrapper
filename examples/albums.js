global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQBPOFSN0YhCkPt1NW_YikTZTVjhsth5gKWpMxnzFPD2BKByUz8IzwoT-2vy4PN4xuXbAhSNNnixilSnAipjcTFYwRZzEEVlNRu3ce3xgegjJhfuPaWYNPDPx76zFGCp6-fLbsuGD3e6qQsEE4g7'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
