

function Jugador(nombre){

    this.nombre = nombre;
    this.hp = 100;
    this.mp = 100;

    this.curar = function(jugadorObjetivo){

        if(this.mp>=20){
            if(jugadorObjetivo.hp<100){
                this.mp-=20;
                jugadorObjetivo.hp+=20;

            }
            this.estado(jugadorObjetivo);
        }else{
            console.info(this.nombre + " no tiene mp");
        }
    }

    this.atacar = function(jugadorObjetivo){

        if(this.mp>=20){
            if(jugadorObjetivo.hp>20){
                this.mp-=20;
                jugadorObjetivo.hp-=20;
                if(jugadorObjetivo.mp<100){
                    jugadorObjetivo.mp+=15;
                    this.estado(jugadorObjetivo);
                }
            }else{
                jugadorObjetivo.hp=0;
                console.error(jugadorObjetivo.nombre + " a muerto");
            }
        }else{
            this.mp=0;
            console.info(this.nombre + " tiene "+ this.mp +", por lo que no puede atacar");
        }
    }
    this.estado= function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var joseph = new Jugador("Joseph Joestar");
var jotaro = new Jugador("Jotaro Kujo");


joseph.atacar(jotaro);
//joseph.curar(jotaro);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
jotaro.atacar(joseph);
