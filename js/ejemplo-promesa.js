//https://www.freecodecamp.org/espanol/news/como-aprender-promesas-javascript-y-async-await-en-20-minutos/


miCumple(true)
    .then((result) =>{
        //lo que regrese la promesa se va mostrar aqui, siempre y cuando se se ejecute bien la promesas
        alert('entro aqui' + result)
    })
    .catch((error) => {
          //lo que regrese la promesa se va mostrar aqui, siempre y cuando no  se ejecute bien la promesas
        alert(error);
    })
    .finally(()=>{
        //muestra el final de la promesa
        alert(' se armo');
    })


function miCumple (KayoSeEnferma) {
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            if(KayoSeEnferma == true){
                resolve(2);
            } else {
                reject(new Error("Estoy triste"));
            }

        },3000);

    });
}