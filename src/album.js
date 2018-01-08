import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const getAlbum = query =>
  fetch(`${API_URL}/albums/${query}`, HEADERS).then(toJSON);

export const getAlbums = query =>
  fetch(`${API_URL}/albums/?ids=${query}`, HEADERS).then(toJSON);

export const getAlbumTracks = query =>
  fetch(`${API_URL}/albums/${query}/tracks`, HEADERS).then(toJSON);
