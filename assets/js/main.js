console.log('Django + Webpack funcionando correctamente');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación inicializada');
    
    // Ejemplo: Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


export function initApp() {
    console.log('App inicializada');
}