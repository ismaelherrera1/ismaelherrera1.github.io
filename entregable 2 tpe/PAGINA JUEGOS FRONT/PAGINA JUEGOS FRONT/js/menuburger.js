document.getElementById('menuButton').addEventListener('click', ejecutarFuncionSegunResolucion);

function ejecutarFuncionSegunResolucion() {
    const menu = document.querySelector('.burger-menu');
    const container = document.querySelector('.body-container');
    const containers_seccion = document.querySelectorAll('.container-seccion'); // Obtener todos los elementos con la clase .container-seccion

    if (window.innerWidth <= 768) {
        menu.classList.toggle('hidden-mobile');
        container.classList.toggle('solo-mobile');

        containers_seccion.forEach(container_seccion => {
            container_seccion.classList.toggle('container-seccion-center');
        });

    } else {
        menu.classList.toggle('hidden-desktop');
        container.classList.toggle('solo-desktop');

        containers_seccion.forEach(container_seccion => {
            container_seccion.classList.toggle('container-seccion-center');
        });
    }
}
