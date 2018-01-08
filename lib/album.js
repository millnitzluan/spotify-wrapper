'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

var getAlbum = exports.getAlbum = function getAlbum(query) {
  return fetch(_config.API_URL + '/albums/' + query).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(query) {
  return fetch(_config.API_URL + '/albums/?ids=' + query).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(query) {
  return fetch(_config.API_URL + '/albums/' + query + '/tracks').then(_utils.toJSON);
};