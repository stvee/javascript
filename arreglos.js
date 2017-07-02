/*ARREGLOS en javascript*/

var arr = [5,4,3,2,1];

console.log(arr);
console.log(" Posicion 0 : "+arr[0]); //imprime posicion cero

//funciones para manejo de arreglos en JS
/*FUNCION REVERSE: revierte los elementos del arreglo*/

arr.reverse();
console.log("Mismo arreglo pero en orden contrario (funcion REVERSE) : "+arr);

/*funcion MAP : sirve para recorrer un arreglo, similar a un ciclo for */

arr = arr.map( function(elem){ //<-- funcion anonima

    elem*=elem;
    return elem;

});

console.log("Cada elemento del arreglo se elevo al cuadrado, utilizando la funcion MAP para recorrer el arreglo : "+arr);

/*Funcion JOIN : Transforma el arreglo en un string*/

arr = arr.join("-");/*aca pusimos un guion para separar cada elemento, pero si se invoca sin parametro
separara con comas por defecto*/
console.log("Aca se utilizo la funcion JOIN, que transforma el arreglo a un string, y se separo por guiones : "+arr);

/*Funcion SPLIT : Funcion opuesta a join, transforma un string a arreglo,
en este caso todo el string sera un elemento del arreglo*/

arr = arr.split();
console.log("Funcion SPLIT, opuesta a join, que vuelve un string en arreglo : "+arr);

/*Funcion PUSH : Sirve para agregar un elemento al final del arreglo*/

arr.push("6");
console.log("Se agrego el numero '6' al final del arreglo, con la funcion PUSH : "+arr);

/*Funcion UNSHIFT : Al contrario que PUSH, sirve para agregar un elemento al principio del arreglo*/

arr.unshift("0");
console.log("Se agrego el numero '0' al principio del arreglo, utilizando la funcion UNSHIFT : "+arr);

/*Funcion toString : sirve para pasar el arreglo a string, pero a diferencia que JOIN, no se puede modificar
el separador de los elementos, y es más rapida*/

console.log("Se utilizo la funcion toString para pasar el arreglo a string, (mas rapida que JOIN) : "+arr.toString());

/*Funcion POP : Elimina un el ultimo elemento del arreglo y lo almacena en otra variable*/

var eliminado = arr.pop();
console.log("Se elimino el ultimo elemento con la funcion POP : "+arr+" , elemento eliminado : "+eliminado);

/*Funcion SPLICE : Elimina elementos del arreglo. */

arr.splice(1,1);/*<-- el primer parametro apunta al elemento desde el que se quiere eliminar,
y el segundo parametro indica la cantidad de elementos que se quieren eliminar */
console.log("Se eliminaron elementos con la funcion SPLICE : "+arr);

console.log(arr);
