if (typeof window === 'undefined') return;

var assert = require('chai').assert;
const filterLibrary = require('../src/app');

describe('filter()', () => {
  it('debería poner gris la imagen', () =>{
    chai.assert.equal(filterLibrary.greyFunction(), true);
    chai.assert.equal(filterLibrary.greyFunction(), false);
  });
});