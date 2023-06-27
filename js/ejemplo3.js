var ul = document.createElement('ul');
var divAutores = document.getElementById('Autores');
var url = 'https://randomuser.me/api/?results=10';


//getUser();
function getUser() {
    fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw "Respuesta incorrecta del servidor";
            }
        })
        .then(data => {
            var user = data.results;
            return user.map(users =>{
                var li = document.createElement("li");
                li.append(users.name.title+' '+users.name.first +' '+users.name.last);
                console.log(li);
                ul.append(li);
                divAutores.append(ul);

            })

        }).catch(error => {
            console.log(error);
        });

}






