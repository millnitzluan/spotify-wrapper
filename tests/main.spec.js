import { expect } from 'chai';
import FizzBuzz from '../src/main.js';
describe('FizzBuzz', () => {
  
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  
  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return the number', () => {
    expect(FizzBuzz(4)).to.be.equal(4);
    expect(FizzBuzz(8)).to.be.equal(8);
  });

  it('should return zero when zero', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
