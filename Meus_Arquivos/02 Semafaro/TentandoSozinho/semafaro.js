const red = document.getElementById ( 'red' );
const yellow = document.getElementById ( 'yellow' );
const green = document.getElementById ( 'green' );
const automatic = document.getElementById ( 'automatic' );
const sema = document.getElementById ( 'sema' );

function lampRed () {
    sema.src = './img/vermelho.png';
}

function lampYellow () {
    sema.src = './img/amarelo.png';
}

function lampGreen () {
    sema.src = './img/verde.png';
}


red.addEventListener ( 'click', lampRed);
yellow.addEventListener ( 'click', lampYellow);
green.addEventListener ( 'click', lampGreen);