const turnOn = document.getElementById ( 'turnOn_Off' );
const turnOff = document.getElementById ( 'turnOn_Off' );
const repair = document.getElementById ( 'repair' );
const lamp = document.getElementById ( 'lamp' ) 

function islampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !islampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !islampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }    
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'; 
}

function lampRepair () {
    lamp.src = './img/desligada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'dblclick', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
repair.addEventListener ( 'click', lampRepair);