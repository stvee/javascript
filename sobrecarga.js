

function crearProducto(nombre, precio){

    nombre = nombre || "sin nombre";
    precio = precio || 0;
    console.log("Producto : ", nombre , ", Precio : ", precio);
};

crearProducto();

/*Si se tuviera que crear un producto con un precio base, se crea otra funcion que utilizara
la funcion anterior*/

function crearProducto100(nombre){
    crearProducto(nombre,100);
};

crearProducto100("Goma de borrar");
