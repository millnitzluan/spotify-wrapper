export const getAlbum = query =>
  fetch(`https://api.spotify.com/v1/albums/${query}`)
    .then(data => data.json());

export const getAlbums = query =>
  fetch(`https://api.spotify.com/v1/albums/?ids=${query}`)
    .then(data => data.json());

export const getAlbumTracks = query =>
  fetch(`https://api.spotify.com/v1/albums/${query}/tracks`)
    .then(data => data.json());
