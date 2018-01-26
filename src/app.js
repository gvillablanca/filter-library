 const filterLibrary = {};
  //  creo, agrego textos y atributos a los elementos nuevos
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementsByTagName('img');
  console.log(imagen);
  //const imagen = document.querySelectorAll('img');
  const body = document.getElementById('body');
  const newContainer = document.createElement('div');
  newContainer.setAttribute('id', 'mocha');
  const btnGrey = document.createElement('button');
  const greyText = document.createTextNode('GreyScale');
  btnGrey.setAttribute('class', 'btn btn-default');
  const btnSepia = document.createElement('button');
  const sepiaText = document.createTextNode('Sepia');
  btnSepia.setAttribute('class', 'btn btn-default');
  const btnHueRotate = document.createElement('button');
  const huerotateText = document.createTextNode('Hue rotate');
  btnHueRotate.setAttribute('class', 'btn btn-default');
  const btnInverse = document.createElement('button');
  const inverseText = document.createTextNode('Inverse');
  btnInverse.setAttribute('class', 'btn btn-default');
  const btnSaturate = document.createElement('button');
  const saturateText = document.createTextNode('Saturate');
  btnSaturate.setAttribute('class', 'btn btn-default');
  const btnNormal = document.createElement('button');
  const normalText = document.createTextNode('Normal');
  btnNormal.setAttribute('class', 'btn btn-default'); 
  //  apendeo los objetos creados
  body.appendChild(container);  
  body.appendChild(newContainer);
  newContainer.appendChild(btnGrey);
  btnGrey.appendChild(greyText);
  newContainer.appendChild(btnSepia);
  btnSepia.appendChild(sepiaText);
  newContainer.appendChild(btnHueRotate);
  btnHueRotate.appendChild(huerotateText);
  newContainer.appendChild(btnInverse);
  btnInverse.appendChild(inverseText);
  newContainer.appendChild(btnSaturate);
  btnSaturate.appendChild(saturateText);
  newContainer.appendChild(btnNormal);
  btnNormal.appendChild(normalText);
  /*  coloco un for para apendear cada imagen 
  *   que va apareciendo en el arreglo porque 
  *   no puedo pasar un arreglo con cosas dentro 
  *   a un contenedor, debo pasarlas de 1 en 1
  */
  for (let i = 0; i < imagen.length; i++) {
      container.appendChild(imagen[i]);
  }
  //  paso todos los elementos creados al body del html
   document.body.appendChild(newContainer);
  //  donde cargo los estilos automaticos que debe llevar la pagina
  document.body.onload = styleElement;
  function styleElement(element) {
    newContainer.style.marginLeft = '25%';
    newContainer.style.marginTop = '2%';
    btnGrey.style.marginRight = '2%';
    btnSepia.style.marginRight = '2%';
    btnHueRotate.style.marginRight = '2%';
    btnInverse.style.marginRight = '2%';
    btnSaturate.style.marginRight = '2%';
    btnNormal.style.marginRight = '2%';
  } 
  /* separacion del codigo para poder trabajar 
  *  en partes y no solo 1 funcion que contenga 
  *  todo, de este modo actualizamos de mejor 
  *  manera el trabajo en el test
  */
  filterLibrary.greyFunction = function (event) {
    btnGrey.addEventListener('click', ()=>{
        for (let i = 0; i < imagen.length; i++){      
          imagen[i].style.filter ='grayscale(100%)';
          console.log('colores en escala de grises');          
        }      
      });
    }    
  
  filterLibrary.sepiaFunction = function (event) {
    btnSepia.addEventListener('click', ()=>{
      for (let i = 0; i < imagen.length; i++){
        imagen[i].style.filter ='sepia(100%)';
        console.log('colores en sepia');
      }      
    });
  }
  filterLibrary.hueFunction = function (event) {
     btnHueRotate.addEventListener('click', ()=>{
      for(let i = 0; i< imagen.length; i++){
        imagen[i].style.filter ='hue-rotate(90deg)';
        console.log('colores hue-rotate');
      }      
    });
  }
  filterLibrary.inverseFilter = function (event) {
    btnInverse.addEventListener('click', ()=>{
      for(let i = 0; i< imagen.length; i++){
        imagen[i].style.filter ='invert(100%)';
        console.log('colores invertidos');
      }      
    }); 
  }
  filterLibrary.saturateFunction = function (event) {
     btnSaturate.addEventListener('click', ()=>{
      for(let i = 0; i < imagen.length; i++){
        imagen[i].style.filter ='saturate(10)';
        console.log('colores saturado');
      }
      
    });
  }
  filterLibrary.normalFunction = function (event) {
     btnNormal.addEventListener('click', ()=>{
      for(let i = 0; i < imagen.length; i++){
        imagen[i].style.filter ='grayscale(0%)';
        imagen[i].style.filter ='saturate(0)';
        imagen[i].style.filter ='invert(0%)';
        imagen[i].style.filter = 'hue-rotate(0deg)';
        imagen[i].style.filter ='sepia(0%)';
        console.log('colores normales');
      }      
    });
  }
  /* es6 funciones
  *
  */
filterLibrary.filterFunction = function (event) {  
  //  recorrer array para selecionar imagen que quiero trabajar
  /*
  imagen[i].addEventListener('click', ()=>{
    for (let i = 0; i < imagen.length; i++) {      
    }
  });
  */
}
  //  eventos asignados a todos los botones  
  filterLibrary.greyFunction();
  filterLibrary.sepiaFunction();
  filterLibrary.hueFunction();
  filterLibrary.inverseFilter();
  filterLibrary.saturateFunction();
  filterLibrary.normalFunction();
  filterLibrary.filterFunction();
//  llamo la funcion para que se ejecute al cargar la pagina
  filterLibrary.filterFunction();
//  exportar para que se pueda usar en otro js
//  es5 export
if(typeof exports !== 'undefined') {
   exports.filterLibrary = filterLibrary;
}
// es6
//module.exports = filterLibrary;
