// Selecciona el menú hamburguesa y el menú de navegación
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav ul');

// Agrega un evento para alternar la visibilidad del menú
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animación del botón
    navMenu.classList.toggle('active');  // Mostrar/ocultar menú
});

