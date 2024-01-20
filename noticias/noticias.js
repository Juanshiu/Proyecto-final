// Animación de las barras
const menuButton = document.querySelector('.menu__icon');
let animationActive = false;

menuButton.addEventListener('click', () => {
    const spans = menuButton.querySelectorAll('span');
    
    if (animationActive) {
        // Restaurar la animación
        spans[0].style.backgroundColor = '#9000ff';
        spans[0].style.transform = 'translateY(0) rotate(0)';
        spans[1].style.transform = 'translateX(0)';
        spans[1].style.opacity = 1;
        spans[2].style.backgroundColor = '#9000ff';
        spans[2].style.transform = 'translateY(0) rotate(0)';
        animationActive = false;
    } else {
        // Activar la animación
        spans[0].style.backgroundColor = 'rgb(255, 59, 48)';
        spans[0].style.transform = 'translateY(11px) rotate(-45deg)';
        spans[1].style.transform = 'translateX(-50%)';
        spans[1].style.opacity = 0;
        spans[2].style.backgroundColor = 'rgb(255, 59, 48)';
        spans[2].style.transform = 'translateY(-11px) rotate(45deg)';
        animationActive = true;
    }
});

// Obtén el botón "barras" y el menú
const barrasButton = document.querySelector('.barras');
const headerMenu = document.querySelector('.header-menu');

barrasButton.addEventListener('click', () => {
  const icon = barrasButton.querySelector('span');
  if (headerMenu.style.display === 'block') {
    headerMenu.style.display = 'none';
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    headerMenu.classList.add('.hide');
  } else {
    headerMenu.style.display = 'block';
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    headerMenu.classList.remove('.hide');
  }
});

// Ventana emerjente discos
var info = document.getElementById("info");
document.getElementById("myLink").onmouseover = function(event) {
    info.style.display = "block";
    info.style.left = event.pageX + 'px';
    info.style.top = (event.pageY + 20) + 'px';
}
document.getElementById("myLink").onmouseout = function() {
    info.style.display = "none";
}
document.getElementById("myLink").onmousemove = function(event) {
    info.style.left = event.pageX + 'px';
    info.style.top = (event.pageY + 20) + 'px';
}

var info1 = document.getElementById("info1");
document.getElementById("myLink1").onmouseover = function(event) {
    info1.style.display = "block";
    info1.style.left = event.pageX + 'px';
    info1.style.top = (event.pageY + 20) + 'px';
}
document.getElementById("myLink1").onmouseout = function() {
    info1.style.display = "none";
}
document.getElementById("myLink1").onmousemove = function(event) {
    info1.style.left = event.pageX + 'px';
    info1.style.top = (event.pageY + 20) + 'px';
}

// Escucha el evento de clic en todo el documento
document.addEventListener('click', function(event) {
  // Obtiene todos los elementos <details> abiertos
  var openDetails = document.querySelectorAll('details[open]');
  
  // Verifica si el clic fue fuera de un <details>
  var isClickInsideDetails = event.target.closest('details');

  // Si el clic fue fuera de un <details>, cierra todos los <details> abiertos
  if (!isClickInsideDetails) {
    openDetails.forEach(function(details) {
      details.removeAttribute('open');
    });
  }
});

// Ajustar dimensión de la ventana filtro
function adjustDetailsWindowSize() {
  var summary = document.querySelector('.filtro-wins > summary');
  var detailsWindow = document.querySelector('.filtro-time');

  // Ajustar el ancho de la ventana de details para que coincida con el de summary
  if (summary && detailsWindow) {
    detailsWindow.style.width = summary.offsetWidth + 'px';
  }
}

// Ajustar al cargar
adjustDetailsWindowSize();

// Ajustar cuando la ventana cambia de tamaño
window.addEventListener('resize', adjustDetailsWindowSize);







