if (typeof window === 'undefined') return;

var assert = require('chai').assert;
const filter = require('../src/app.js');

describe('filter()', () => {
  it('debería poner gris la imagen', () =>{
    assert.equal(imagen, filter());
  });
});