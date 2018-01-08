import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {

  let fetchedStub;
  let promise;
  let spotify;
  
  beforeEach(() =>{
    spotify = new SpotifyWrapper({
      token: 'foo'
    });

    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });
  
  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke test', () =>{
  
    it('should exist the albums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exist the artists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exist the tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exist the playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('artists', () => {
    it('should call fetch function', () => {
      const artist = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;      
    });

    it('should call fetch with the correct URL', () => {
      const artist = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });
  });

  describe('albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;      
    });

    it('should call fetch with the correct URL', () => {
      const album = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });

  describe('tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;      
    });

    it('should call fetch with the correct URL', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });

  describe('playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;      
    });

    it('should call fetch with the correct URL', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });

});
