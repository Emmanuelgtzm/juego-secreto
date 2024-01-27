
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

//DESAFIOS
/*
1.Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
console.log(listaGenerica);
*/

/*
2.Crea una lista de lenguajes de programación llamada
 "lenguagesDeProgramacion con los siguientes elementos: 
 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//console.log(lenguagesDeProgramacion);
*/

/*
3.Agrega a la lista "lenguagesDeProgramacion los siguientes 
elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//console.log(lenguagesDeProgramacion);
*/


/*
4.Crea una función que muestre en la consola todos los 
elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguagesSeparadamente() {
    for(let i=0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguagesSeparadamente();
*/

/*
5.Crea una función que muestre en la consola todos los 
elementos de la lista "lenguagesDeProgramacion en orden 
inverso.

function mostrarLenguageReversoSeparadamente(){
    for(let i = lenguagesDeProgramacion.length -1; i >=0; i --){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguageReversoSeparadamente();
*/

/*
6.Crea una función que calcule el promedio de los elementos
 en una lista de números.

function calcularMedia(lista){
    let suma = 0;
    for ( let i=0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length
}

let numeros = [10,20,30,40,50];
let media = calcularMedia(numeros);
console.log("Media: ", media);
*/

/*
7.Crea una función que muestre en la consola el número 
mayor y menor en una lista.

function encontrarMayorMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];

    for(let i = 1; i < lista.length; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
        if (lista[i] < menor){
            menor = lista[i];
        }
    }
    console.log('Mayor: ', mayor);
    console.log('Menor: ', menor);
}
let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
*/

/*
8.Crea una función que retorne la suma de todos los 
elementos en una lista.

function calcularSuma(lista){
    let suma = 0;

    for(let i=0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}
let numero = [15, 8, 25, 5, 12];
let suma = calcularSuma(numero);
console.log("Suma: ", suma);
*/

/*
9.Crea una función que reciba una lista como parámetro 
y retorne el índice de un elemento también pasado como 
parámetro. Si ese elemento no existe en la lista, 
retorna -1.

function encontrarIndiceElemento(lista, elemento) {
    for (let i =0; i<lista.length; i++){
        if (lista[i] === elemento){
            return i; //Retorna el indice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemnto no se encuentra en la lista
}
*/