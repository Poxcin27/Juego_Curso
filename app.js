let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario> numeroSecreto){                            //El usuario aún no adivina
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        cleanBox();
    }
    
    return;
}

function cleanBox()
{
    document.querySelector('#valorUsuario').value = ''; 
    
}
function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Todos los numeros ya estan sorteados?
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales()
{
    //Mensajes Iniciales
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Numero de Intentos
    intentos = 1;
}

function reiniciarJuego() 
{
    //Limpiar caja
    cleanBox(); 
    //Condiciones Iniciales
    condicionesIniciales();
    //Desactivar botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();