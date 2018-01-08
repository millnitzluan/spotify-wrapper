import { API_URL } from './config';
import { toJSON } from './utils';

export const getAlbum = query =>
  fetch(`${API_URL}/albums/${query}`).then(toJSON);

export const getAlbums = query =>
  fetch(`${API_URL}/albums/?ids=${query}`).then(toJSON);

export const getAlbumTracks = query =>
  fetch(`${API_URL}/albums/${query}/tracks`).then(toJSON);
