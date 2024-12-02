<script>
    // Selección de elementos del DOM
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Evento para alternar el menú
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active'); // Añade o quita la clase 'active'
        menuIcon.classList.toggle('open');  // Alterna la animación del ícono
    });
</script>