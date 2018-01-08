import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('SpotifyWrapper', () => {

  it('should create an instance of SpotifyWrapper', () => {
    let spotfy = new SpotifyWrapper({});
    expect(spotfy).to.be.a.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotfy = new SpotifyWrapper({
      apiURL: 'blabla'
    });

    expect(spotfy.apiURL).to.be.equal('blabla');
  });

  it('should use default API_URL if not provided', () => {
    let spotfy = new SpotifyWrapper({});
    expect(spotfy.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotfy = new SpotifyWrapper({
      token: 'foo'
    });

    expect(spotfy.token).to.be.equal('foo');
  });

  describe('request method', () => {
    
    let fetchedStub;
    let promise;
    
    beforeEach(() =>{
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });
    
    afterEach(() => {
      fetchedStub.restore();
    });
    
    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(fetchedStub).to.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: {
          Autorization: `'Bearer foo'`,
        },
      };

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
