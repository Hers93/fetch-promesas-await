/// declarar variable del formulario
var formulario = document.querySelector('.form-datos');

/// evento para el formulario de la formulario
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(formulario);
    var formData = new FormData(formulario);
    console.log(formData.get("nombre"));
    fetch

});
