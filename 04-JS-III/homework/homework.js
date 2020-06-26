// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var a = array[0];
  return a ;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a = array.length - 1 ;
  return array[a] ;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length ;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var i = array.length - 1;
  var arreglo = [];
  var j = 0;
  var a ;
  while (j <= i ){
     a = array[j] + 1 ;
     arreglo[j] = a ;
     j++;

  }
  return arreglo ;
  
  
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento) ;
  return array ;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  array ;
  return array ;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  var j = palabras.length - 1 ;
  var i = 0;
  var conc ;
  
  if ((i === 0) && (j === 0)) {
      conc = item ;

    }
   if (i === 0){
    var item = palabras.shift();
    conc = item;
    palabras;
    }

    while (i <= j ){
      var item = palabras.shift();
      palabras;
      if (i<j){
        conc =  conc + ' ' + item ;
      }
      if(i === j ){
       conc + item;
      }
      i++;

    }

  return conc;

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

var estaOnoesta = false;
var j = array.length - 1 ;
var i = 0;
 
 while (i <= j){
   var item = array[i];
    if (item == elemento){
    estaOnoesta = true;
    }
    i++;
 }
  return estaOnoesta;

}
 
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  var i = 0;
  var j = numeros.length - 1;
  var suma = 0 ;
  var elemento ;
  while (i <= j){
    elemento = numeros[i];
    suma = suma + elemento ;
    i++
  } 
  return suma ;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
 return agregarNumeros(resultadosTest) / resultadosTest.length ;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var j = numeros.length - 1 ;
  var i = 0;
  var a ;
  var b = 0;
  for(i ; i <= j ; i++){
    a = numeros[i];
    if (a > b){
      b = a ;
    }
    if (a === b){
        b = a ;
    }
  }
  return b ;  
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  if(arguments.length < 1) return 0;
  var mult = 1;
  for(var i = 0; i < arguments.length; i++) {
    mult = mult * arguments[i];
  }
  return mult;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
