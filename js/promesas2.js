
suponer();

function suponer() {
    insertaNumero()
        .then((result) => {
            alert('Dado ' + result.aleatorio + ' obtuviste '+ result.puntos+' puntos');
             return continuarJuego()
        })
        .then((result) => {
            if(result) {
                suponer();
            } else {
                alert("termino el juego");
            }

        })
        .catch((error) => alert(error));
};

function insertaNumero() {
    return new Promise((resolve, reject) => {
        const numUsuario = Number(window.prompt("Introduce un numero (1-6): "));
        //pide al usuario que introduzca un numero

        const aleatorio = Math.floor(Math.random() * 6 + 1);
        //random para numero aleatorio del 1 al 6

        //validamos que se un numero
        if (isNaN(numUsuario)) {
            reject(new Error("Tipo de entrada incorrecta"));
            //si el usuario introduce un valor que no es un numero, se ejecuta el error
        }

        if(numUsuario === aleatorio){
            resolve({
                puntos: 2,
                aleatorio,
            });
        }else if(numUsuario === aleatorio -1 || numUsuario === aleatorio + 1){
            resolve({
                puntos:1,
                aleatorio,
            });
        } else {
            resolve({
                puntos:0,
                aleatorio,
            })
        }
    });
}


function continuarJuego(){
    return new Promise((resolve) => {
        if(window.confirm("Quieres continuar?")){
            //se pregunta si el usuario quiere continuar con el juego, con un modal de confirmacion.
            resolve(true);
        }else {
            resolve(false);
        }
    });
}