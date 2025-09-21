// Variable de estado principal
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    actualizarLista();
}

// Función para actualizar la lista visual
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoElemento = document.createElement('li');
        amigoElemento.textContent = amigos[i];
        lista.appendChild(amigoElemento);
    }
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder sortear.');
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    let resultado = document.getElementById('resultado');
    resultado.textContent = '¡El amigo secreto es: ' + ganador + '!';
}

// NUEVA FUNCIÓN: Función para reiniciar el juego
function reiniciarJuego() {
    // 1. Reiniciar el array de datos
    amigos = [];

    // 2. Limpiar la lista de amigos en pantalla
    document.getElementById('listaAmigos').innerHTML = '';

    // 3. Limpiar el resultado en pantalla
    document.getElementById('resultado').textContent = '';
}