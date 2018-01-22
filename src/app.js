function grayScale(){  
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementById('img');
  const newContainer = document.createElement('div');
  const btnGrey = document.createElement('button');
  const greyText = document.createTextNode('GreyScale');
  const btnSepia = document.createElement('button');
  const sepiaText = document.createTextNode('Sepia');
  const btnHueRotate = document.createElement('button');
  const huerotateText = document.createTextNode('Hue rotate');
  const btnInverse = document.createElement('button');
  const inverseText = document.createTextNode('Inverse');
  const btnSaturate = document.createElement('button');
  const saturateText = document.createTextNode('Saturate');

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

  const currentDiv = document.getElementById('div1');
  document.body.insertBefore(newContainer, currentDiv);

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
}

grayScale();
