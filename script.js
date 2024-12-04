// Selecciona el menú hamburguesa y el modal
const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');

// Agrega un evento para alternar la visibilidad del menú
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animación del botón
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex'; // Mostrar/ocultar menú modal
});

// Cierra el modal al hacer clic fuera del menú
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        hamburger.classList.remove('active'); // Restablecer el estado del botón
    }
});

const navMenu = document.querySelector('header nav');

// Agrega un evento para alternar la visibilidad del menú
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animación del botón
    navMenu.classList.toggle('active');  // Mostrar/ocultar menú
});