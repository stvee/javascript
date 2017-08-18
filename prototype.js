/*En javascript los prototipos o prototypes pueden ser metodos o variables que
se pueden agregar externamente a un objeto ya creado*/

function Automovil(){

    this.marca = "Mclaren";
    this.modelo = "P10";
    this.año = "2015";
    this.rapidez = "330 km/h";

}

/*utilizando la palabra clave "prototype", insertamos en Automovil el metodo imprimirDatos, se aconceja utilizar
prototypes para añadir funciones o metodos en vez de datos primitivos, para asi no tener codigo repetido
en cada objeto Automovil*/

Automovil.prototype.imprimirDatos = function(){

    console.log("Marca : "+this.marca+", Modelo : "+this.modelo+ ", año : "+this.año+", rapidez maxima : "+this.rapidez);

}

var auto = new Automovil();

console.log(auto.imprimirDatos());

/*funciones anonimas : Las funciones anonimas en javascript sirven para encapsular variables y codigos y asi quedar
aisladas del objeto global de javascript (donde se encuentran las funciones y metodos estandar de javascript)*/

(function(){ /*las funciones anonimas tienen esta sintaxis, donde se escriben dentro de un() */

    var x = 20;
    console.log(x);
    x = function(){
        x = 300;
        return x;
    }();

    console.log(x);
})();

/*Otro tipo de funciones anonimas*/

function ejecutarFuncion(fn){/*funcion que recibe otra funcion y compara si el valor que entrega es 1*/

    if( fn() === 1){
        return true;
    }else{
        return false;
    }
};

console.log(

    ejecutarFuncion( function(){ /*<--- funcion anonima, ya que se crea al momento de ejecucion de la funcion "ejecutarFuncion"*/
        console.log("Funcion anonima ejecutada!");
        return 0;
    })
);

/*Funciones "typeof" e "instanceof"*/

function identificarTipo( param ){

    console.log(typeof param);/*<-- retorna el tipo de dato del parametro*/
    //en este caso entregara "Object" ya que la variable "person" (declarada mas abajo) es un objeto (Persona)
    console.log(param instanceof Persona);/*<-- retorna si true o false si param es del mismo tipo de dato que Persona */
    //en este caso entrega true ya que param es de tipo de dato "Persona" (aunque realmente es un objeto)
}

function Persona(){

    this.nombre = "Sashita";
    this.edad = "24";
}

var person = new Persona();

identificarTipo(person);


/*ARGUMENTS: Todas las funciones en javascript crean un atributo "arguments" en tiempo de ejecucion
el cual consiste en un arreglo que almacena los argumentos con los que se invoca la funcion*/

function funcionUno(a,b,c){

    if(arguments.length !== 3){
        alert("La funcion necesita 3 parametros")
    }
    console.log( a + b + c);
}

funcionUno(1,2,3);

/*CASO CONTRARIO: Aca la funcion mostrara un mensaje de alerta diciendo que se necesitan
la cantidad de parametros que requiere la funcion, debido a que al momento de invocarla
se estan pasando menos parametros de los que requiere*/

function funcionDos(a,b,c){

    if(arguments.length !== 3){
        alert("La funcion necesita 3 parametros")
        return; //<- aca debe ir un return para que retorne solo el mensaje y no el valor de la suma
    }
    console.log( a + b + c);
}

funcionDos(1,2,3,4,5);
