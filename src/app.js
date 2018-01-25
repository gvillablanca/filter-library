  //  creo, aagrego textos y atributos a los elementos nuevos
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementsByName('imgLol')[0];
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
  container.appendChild(imagen);
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

  //  paso todos los elementos creados al body del html
  /*
  const currentDiv = document.getElementById('newContainer');
  document.body.insertBefore(newContainer, currentDiv);
  */
  document.body.appendChild(newContainer);

  //  donde cargo los estilos automaticos que debe llevar la pagina
  document.body.onload = styleElement;
  function styleElement() {
    newContainer.style.marginLeft = '25%';
    newContainer.style.marginTop = '2%';
    /*
    imagen.style.border = '1px solid #D8D8D8';
    imagen.style.borderRadius = '5px';
    imagen.style.marginTop = '2%';
    */
    btnGrey.style.marginRight = '2%';
    btnSepia.style.marginRight = '2%';
    btnHueRotate.style.marginRight = '2%';
    btnInverse.style.marginRight = '2%';
    btnSaturate.style.marginRight = '2%';
    btnNormal.style.marginRight = '2%';
  } 

function greyScale () {
  btnGrey.addEventListener('click', ()=>{
    container.style.filter ='grayscale(100%)';
  });
  if (container.style.filter === 'grayscale(100%)'){
    return true;
  } else {
    return false;
  }
}

function sepia () {
  btnSepia.addEventListener('click', ()=>{
    container.style.filter ='sepia(100%)';
  });
  if (container.style.filter === 'sepia(100%)'){
    return true;
  } else {
    return false;
  }
}

function hueRotate () {
   btnHueRotate.addEventListener('click', ()=>{
    container.style.filter ='hue-rotate(90deg)';
  });
   if (container.style.filter === 'hue-rotate(90deg)'){
    return true;
  } else {
    return false;
  }
}

function inverse() {
  btnInverse.addEventListener('click', ()=>{
    container.style.filter ='';
  }); 
  if (container.style.filter === 'invert(100%)'){
    return true;
  } else {
    return false;
  }
}

function saturate () {
   btnSaturate.addEventListener('click', ()=>{
    container.style.filter ='saturate(10)';
  });
   if (container.style.filter === 'saturate(10)'){
    return true;
  } else {
    return false;
  }
}

function normal () {
   btnNormal.addEventListener('click', ()=>{
    container.style.filter ='grayscale(0%)';
    container.style.filter ='saturate(0)';
    container.style.filter ='invert(0%)';
    container.style.filter = 'hue-rotate(0deg)';
    container.style.filter ='sepia(0%)';
  });
}

function filter() {  
  //  recorrer array para selecionar imagen que quiero trabajar
  imagen.addEventListener('click', ()=>{
    for (var i = 0; i < imagen.length; i++) {
      
    }
  });
  //  eventos asignados a todos los botones  
  greyScale(); 
  sepia();
  hueRotate();
  inverse();
  saturate();
  normal();
}

//  llamo la funcion para que se ejecute al cargar la pagina
filter();


//  exportar para que se pueda usar en otro lado
//module.exports = filter;
