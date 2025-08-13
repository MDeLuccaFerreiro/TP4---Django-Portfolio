const temaBtn = document.getElementById('tema-btn');
const body = document.body;

const temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'oscuro') {
    body.classList.add('tema-oscuro');
    temaBtn.textContent = '☀️';
}

temaBtn.addEventListener('click', () => {
    body.classList.toggle('tema-oscuro');
    const esOscuro = body.classList.contains('tema-oscuro');
    temaBtn.textContent = esOscuro ? '☀️' : '🌙';
    localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('linkedin-btn').addEventListener('click', () => {
    alert('Próximamente me voy a crear mi propio LinkedIn.');
});

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    alert(`¡Gracias ${nombre}! Tu mensaje fue enviado. Te responderé a ${email} pronto.`);
    this.reset();
});