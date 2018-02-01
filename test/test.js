const chai = require('chai');
const expect = chai.expect;
const sum = require('../src/app-test.js');

describe('Validador de suma', () => {
 it('Debe retornar Error, si uno de los dos parametros no existe', () => {
   chai.assert.equal(sum.validate(3, null), 'Error');
   chai.assert.equal(sum.validate(null, 5), 'Error');
   chai.assert.equal(sum.validate(2, undefined), 'Error');
   chai.assert.equal(sum.validate(undefined, 10), 'Error');
   //expect(sum.validate(3, null)).to.be.equal('Error');
 });

 it('Debe devolver la suma de dos numeros', () => {
   expect(sum.validate(2, 5)).to.be.equal(7);
 });
});

//if (typeof window === 'undefined') return;
/*
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
    '<head><meta charset="UTF-8"><title>Cardify</title>' +
    '</head><body><div class="cardify"><h2>Prueba 1</h2>' +
    '<img src="https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg" alt="Osito">' +
    '<img src="https://78.media.tumblr.com/7abd3b7ae58a290dbf509e9c' +
    '39427f47/tumblr_mjgkiuTCQJ1s7mg7ko5_500.gif" alt="León">' +
    '<img class="img" src="http://japonpop.japonshop.com/wp-content/uploads/' +
    '2014/10/arte-latte-japon-gatos-japonshop03.png" alt="gato">' +
    '</script><script src="lib/main.js"></script></body></html>', {runScripts:"outside-only"});

const {
    window
} = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};
*/