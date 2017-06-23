


var persona = {

    nombre: "Joseph",
    apellido: "Joestar",
    imprimirNombre: function(){

        console.log(this.nombre + " " + this.apellido);

    },
    informacion:{
        habilidad: "supa hamon OBADORAIVU",
        stand: "Hermit Purple",
        obtenerInfo: function(){
            console.log("habilidad: "+this.habilidad+" stand: "+this.stand);
            var self=this;/*se crea una variable auxiliar "self" con this como valor, para luego
            ser usada desde dentro de la proxima funcion*/
            var nuevaInformacion = function(){

                /*console.log(this); esto retornara el objeto window en el navegador, ya que el this
                referencia al objeto global de javascript*/
                console.log(self);//self referencia a this
                console.log("habilidad: "+self.habilidad+" stand: "+self.stand);/*esta funcion basicamente hace
                lo mismo que la anterior ubicara en obtenerInfo*/


            }
            nuevaInformacion();
        }
    }

};


persona.imprimirNombre();
persona.informacion.obtenerInfo();
