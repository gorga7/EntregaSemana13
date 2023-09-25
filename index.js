


let apiUrl = `https://picsum.photos/200/300/?category=${temaInput}`;

function agregarTema() {
  let temaInput = document.getElementById('temaInput').value;
  if (temaInput.trim() === '') {
    alert('Por favor, ingresa un tema de estudio.');
    return;
  }

  const temasLista = document.getElementById('temasLista');


  const li = document.createElement('li');

  
  const imagen = document.createElement('img');
  imagen.src = apiUrl + Date.now();
  imagen.alt = 'Imagen del tema de estudio';

  const temaTexto = document.createTextNode(temaInput);


  const btnCompletar = document.createElement('button');
  btnCompletar.innerText = 'Completar';
  btnCompletar.addEventListener('click', () => {
    li.classList.toggle('completado');
  });

  const btnEliminar = document.createElement('button');
  btnEliminar.innerText = 'Eliminar';
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(imagen);
  li.appendChild(temaTexto);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);


  temasLista.appendChild(li);

  document.getElementById('temaInput').value = '';
}