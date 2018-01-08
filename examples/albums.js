global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQB7Uh95E0OboRxgP_fe28fGfBSCsMloU3_f0Z40wUlzV_f2V3yS0Uj7ciI0u5bL4Nk0d_aOtf2kII5JjCUNTrSlJ6mbMErLchv6DTwok_WEQahx6A8o0GKh19ghREEWiX1v'
})

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
