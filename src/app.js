function grayScale(){  
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementById('img');
  const newContainer = document.createElement('div');
  const btnGrey = document.createElement('button');
  const greyText = document.createTextNode('GreyScale');
  btnGrey.setAttribute("class", "btn btn-default");
  const btnSepia = document.createElement('button');
  const sepiaText = document.createTextNode('Sepia');
  btnSepia.setAttribute("class", "btn btn-default");
  const btnHueRotate = document.createElement('button');
  const huerotateText = document.createTextNode('Hue rotate');
  btnHueRotate.setAttribute("class", "btn btn-default");
  const btnInverse = document.createElement('button');
  const inverseText = document.createTextNode('Inverse');
  btnInverse.setAttribute("class", "btn btn-default");
  const btnSaturate = document.createElement('button');
  const saturateText = document.createTextNode('Saturate');
  btnSaturate.setAttribute("class", "btn btn-default");
  const btnNormal = document.createElement('button');
  const normalText = document.createTextNode('Normal');
  btnNormal.setAttribute("class", "btn btn-default");   

  container.appendChild(imagen);
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

  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newContainer, currentDiv);

  document.body.onload = styleElement;

  function styleElement(){
    newContainer.style.marginLeft = "25%";
    newContainer.style.marginTop = "2%";
    imagen.style.border = "1px solid #D8D8D8";
    imagen.style.borderRadius = "5px";
    imagen.style.marginLeft = "25%";
    imagen.style.marginTop = "2%";
    btnGrey.style.marginRight = "2%";
    btnSepia.style.marginRight = "2%";
    btnHueRotate.style.marginRight = "2%";
    btnInverse.style.marginRight = "2%";
    btnSaturate.style.marginRight = "2%";
    btnNormal.style.marginRight = "2%";
  }  


  btnGrey.addEventListener('click', ()=>{
    imagen.style.filter='grayscale(100%)';
  });

  btnSepia.addEventListener('click', ()=>{
    imagen.style.filter='sepia(100%)';
  });

  btnHueRotate.addEventListener('click', ()=>{
    imagen.style.filter='hue-rotate(90deg)';
  });

  btnInverse.addEventListener('click', ()=>{
    imagen.style.filter='invert(100%)';
  });

  btnSaturate.addEventListener('click', ()=>{
    imagen.style.filter='saturate(10)';
  });

  btnNormal.addEventListener('click', ()=>{
    imagen.style.filter='grayscale(0%)';
    imagen.style.filter='saturate(0)';
    imagen.style.filter='invert(0%)';
    imagen.style.filter='hue-rotate(0deg)';
    imagen.style.filter='sepia(0%)';

  });
}

grayScale();
