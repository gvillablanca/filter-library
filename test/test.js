if (typeof window === 'undefined') return;

var assert = require('chai').assert;
const filter = require('../src/app');

describe('filter()', () => {
  it('debería poner gris la imagen', () =>{
    assert.equal(grayscale('grayscale(100%)'), true);
    assert.equal(grayscale('grayscale(0%)'), false);
  });
});