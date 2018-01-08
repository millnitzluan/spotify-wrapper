import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getAbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGT');
      expect(stubedFetch).have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT');

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGy');
      expect(stubedFetch).have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGy');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGT');
      expect(album.resolveValue).to.be.eql({ album: 'name'});
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGT', '4aawyAB9vmqN3uQ7FjRKKK']);
      expect(stubedFetch).have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGT,4aawyAB9vmqN3uQ7FjRKKK');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGT', '4aawyAB9vmqN3uQ7FjRKKK']);
      expect(album.resolveValue).to.be.eql({ album: 'name'});
    });
  });

  describe('getTracks', () => {
    it('should call fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGT');
      expect(stubedFetch).have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT/tracks');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGT');
      expect(tracks.resolveValue).to.be.eql({ album: 'name'});
    });
  });
});