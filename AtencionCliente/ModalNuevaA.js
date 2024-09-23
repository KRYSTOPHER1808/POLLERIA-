// Obtén la modal

var modal = document.getElementById("myModal")  ;
var modalBody = document.getElementById("modalBody");

// Botón que abre la modal
var btn = document.getElementById("openModal");

// Botón que cierra la modal
var span = document.getElementById("closeModal");

// Cuando el usuario hace clic en el botón, abre la modal y carga el HTML
btn.onclick = function() {
    fetch('NuevaAtencion.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            modalBody.innerHTML = data; // Inserta el contenido HTML en la modal
            modal.style.display = "block"; // Muestra la modal
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

// Cuando el usuario hace clic en <span> (x), cierra la modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera de la modal, la cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
