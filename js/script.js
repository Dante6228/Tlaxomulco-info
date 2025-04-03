// MENÚ HAMBURGUESA
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.menu-content').classList.toggle('show');
});

// MENÚ INTERACTIVO DE EDUCACIÓN
document.querySelectorAll('.education-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.education-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
