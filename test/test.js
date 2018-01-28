if (typeof window === 'undefined') return;


const assert = require('chai').assert;
const filterLibrary = require('./src/app.js');

describe('filterLibrary()', ()=>{
	it('debería devolver true para cuando se imprima en consola el atributo',()=>{
		chai.assert.equal(true, console.log(atributo));
	});
		
	it('debería devolver false para cuando se imprima en consola el string "no hay atributo"',()=>{
		chai.assert.equal(false, console.log('no hay atributo'));
	});
});



/*const assert = require('chai').assert;
const filterLibrary = require('./src/app.js');



describe('filterLibrary()', ()=>{
	it('debería devolver true para cuando se imprima en consola el string "atributo"',()=>{
		chai.assert.equal(true, filterLibrary.greyFunction(atributo));
	});
		
	it('debería devolver false para cuando se imprima en consola el string "no hay atributo"',()=>{
		chai.assert.equal(false, filterLibrary.greyFunction('no hay atributo'));
	});
});*/


/*var assert = require('chai').assert;
const greyScale = require('../src/app');

describe('filterLibrary.greyFunction()', () => {
  it('debería poner gris la imagen', () =>{
    chai.assert.equal(filterLibrary.greyFunction('grayscale(100%)'), true);
    chai.assert.equal(filterLibrary.greyFunction('grayscale(0%)'), false);
  });
});*/


/*const filterLibrary = require('./src/app.js');
const assertEqual = (filterLibrary.greyFunction(), atributo)=>{
	if(filterLibrary.greyFunction !== atributo) {
		throw new error ('expected '${value} ' to equal ' ${expected});
	}
}

describe('filterLibrary()', ()=>{
	it('debería devolver true para cuando se imprima en consola el string "atributo"',()=>{
		chai.assert.equal(true, filterLibrary.greyFunction(atributo));
	});
		
	it('debería devolver false para cuando se imprima en consola el string "no hay atributo"',()=>{
		chai.assert.equal(false, filterLibrary.greyFunction('no hay atributo'));
	});
});
*/


/*const assert = require('assert');
var grayScale = require('../src/app.js');

describe('greyFunction()', ()=> {
	it('debería retornar true si el container tiene el filter grayscale en 100', ()=>{
		assert.equal(true, grayScale.greyFunction(console.log('colores en escala de grises'));
	});
	it('debería retornar false si el container tiene el filter gray scale en 0', ()=>{
		assert.equal(false, grayScale.greyFunction('grayscale', 0));
	});
});*/


