

function determinaDato( a ){

    if(a === undefined){
        console.log(a+" es un parámetro undefined ");
    }

    if(typeof a === "number"){
        console.log(a+" es un numero");
    }
    if(typeof a === "string"){
        console.log(a+" es un string");
    }
    if(typeof a === "object"){
        console.log(a+" es un objeto");

        if( a instanceof Number){
            console.log(a+" es un objeto numerico");

        }
    }
}

var b = new Number(5);
console.log(b);
determinaDato(b);

determinaDato({
    nombre : "Esteban",
    apellido : "Lundin"

});

function Automovil(marca, modelo, velocidad){

    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;

}

var auto = new Automovil("Lamborghini", "Huracan", "330 km/h");
console.log(Lambo);

determinaDato(Lambo);
