let imagenesMascota = {
  perro: './links/perro.jpg',
  gato: './links/gato.jpg',
  ave: './links/ave.jpg',
  reptil: './links/reptil.jpg',
  pez: './links/pez.jpg'
};

let tarjetaEditando = null; // Variable para mantener la tarjeta que se está editando

function mostrarFormulario() {
  var formulario = document.querySelector('.container');
  formulario.style.display = 'block';
}

function cerrarFormulario() {
  var formulario = document.querySelector('.container');
  formulario.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('enviar-btn').addEventListener('click', function (event) {
      event.preventDefault();
      if (tarjetaEditando) {
          editarCard(tarjetaEditando);
      } else {
          imprimircard();
      }
  });
});

function imprimircard() {
  let contenedor = document.getElementById("contenedor");
  let nombreMascota = document.getElementById('nombre-mascota').value;
  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let fecha = document.getElementById('fecha').value;
  let hora = document.getElementById('hora').value;
  let tipoMascota = document.getElementById('tipo-mascota').value;
  let sintomas = document.getElementById('sintomas').value;
  let estado = document.getElementById('estado').value;

  // Crear una nueva tarjeta
  let card = document.createElement('div');
  card.classList.add('card');

  let img = document.createElement('img');
  img.src = imagenesMascota[tipoMascota];
  img.alt = 'Imagen de la mascota';
  card.appendChild(img);

  let title = document.createElement('h1');
  title.textContent = nombreMascota;
  card.appendChild(title);

  let owner = document.createElement('p');
  owner.textContent = 'Propietario: ' + propietario;
  card.appendChild(owner);

  let phone = document.createElement('p');
  phone.textContent = 'Teléfono: ' + telefono;
  card.appendChild(phone);

  let date = document.createElement('p');
  date.textContent = 'Fecha: ' + fecha;
  card.appendChild(date);

  let time = document.createElement('p');
  time.textContent = 'Hora: ' + hora;
  card.appendChild(time);

  let symptoms = document.createElement('p');
  symptoms.textContent = 'Síntomas: ' + sintomas;
  card.appendChild(symptoms);

  let state = document.createElement('p');
  state.textContent = 'Estado: ' + estado;
  card.appendChild(state);

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function () {
      card.remove();
  });
  card.appendChild(deleteButton);

  let editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.classList.add('edit-btn');
  editButton.addEventListener('click', function () {
      abrirFormularioParaEdicion(card, nombreMascota, propietario, telefono, fecha, hora, tipoMascota, sintomas, estado);
  });
  card.appendChild(editButton);

  contenedor.appendChild(card);

  cerrarFormulario();
  limpiarFormulario(); // Limpiar el formulario después de agregar la tarjeta
}

function abrirFormularioParaEdicion(card, nombreMascota, propietario, telefono, fecha, hora, tipoMascota, sintomas, estado) {
  mostrarFormulario();
  document.getElementById('nombre-mascota').value = nombreMascota;
  document.getElementById('propietario').value = propietario;
  document.getElementById('telefono').value = telefono;
  document.getElementById('fecha').value = fecha;
  document.getElementById('hora').value = hora;
  document.getElementById('tipo-mascota').value = tipoMascota;
  document.getElementById('sintomas').value = sintomas;
  document.getElementById('estado').value = estado;
  tarjetaEditando = card; // Guardar la tarjeta que se está editando
}

function editarCard(card) {
  let nombreMascota = document.getElementById('nombre-mascota').value;
  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let fecha = document.getElementById('fecha').value;
  let hora = document.getElementById('hora').value;
  let tipoMascota = document.getElementById('tipo-mascota').value;
  let sintomas = document.getElementById('sintomas').value;
  let estado = document.getElementById('estado').value;

  card.querySelector('h1').textContent = nombreMascota;
  card.querySelector('p:nth-of-type(1)').textContent = 'Propietario: ' + propietario;
  card.querySelector('p:nth-of-type(2)').textContent = 'Teléfono: ' + telefono;
  card.querySelector('p:nth-of-type(3)').textContent = 'Fecha: ' + fecha;
  card.querySelector('p:nth-of-type(4)').textContent = 'Hora: ' + hora;
  card.querySelector('p:nth-of-type(5)').textContent = 'Tipo de Mascota: ' + tipoMascota;
  card.querySelector('p:nth-of-type(6)').textContent = 'Síntomas: ' + sintomas;
  card.querySelector('p:nth-of-type(7)').textContent = 'Estado: ' + estado;

  cerrarFormulario();
  tarjetaEditando = null; // Limpiar la variable después de editar
  limpiarFormulario(); // Limpiar el formulario después de editar
}

function limpiarFormulario() {
  document.getElementById('nombre-mascota').value = '';
  document.getElementById('propietario').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('hora').value = '';
  document.getElementById('tipo-mascota').value = 'perro';
  document.getElementById('sintomas').value = '';
  document.getElementById('estado').value = 'abierta';
}
