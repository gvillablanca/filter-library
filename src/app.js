function grayScale(){
  
  const container = document.getElementById('mainContainer');
  const imagen = document.getElementById('img');

  container.appendChild(imagen);

  imagen.addEventListener('click', ()=>{
    imagen.style.filter='grayscale(100%)';
  });
}

grayScale();
