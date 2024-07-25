const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = ducument.getElementById ('lamp');

function lampOn () {
    lamp.src = './img/ligada.jpg'; /*paramos aqui,não está funcionando a troca de imagem ( 9 minutos ) */
}


turnOn.addEventListener ( 'click', lampOn );