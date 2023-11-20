// Función Leer más
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Leer más"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Leer menos"; 
        moreText.style.display = "inline";
    }
}

// Animación de la flecha en la track list
var acc = document.getElementsByClassName("track-content");
var i;

for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var icon = this.querySelector("i");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
    } 
    });
}

// Query para ventana de aviso
$(document).ready(function() {
    $('#comentarioInput').click(function() {
        mostrarAviso('¡Inicia sesión para comentar!');
    });
});

function mostrarAviso(mensaje) {
    var aviso = $('<div class="aviso">' + mensaje + '</div>');
    $('.comentarios').append(aviso);

    aviso.fadeIn();

    setTimeout(function() {
        aviso.fadeOut(function() {
            aviso.remove();
        });
    }, 3000); // El aviso se oculta después de 3 segundos
}

