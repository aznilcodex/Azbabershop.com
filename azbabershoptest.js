// Halaman selesai dimuat
window.addEventListener('DOMContentLoaded', function() {
    // Tunjukkan halaman
    document.body.classList.add('page-loaded');

    // Animasi muncul semasa tatal
    const elements = document.querySelectorAll('.service-card, .gallery-item, .about-content, .opening-hours, .booking-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Kesan fokus pada borang
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
        const group = field.closest('.form-group');
        field.addEventListener('focus', () => group.classList.add('focused'));
        field.addEventListener('blur', () => group.classList.remove('focused'));
    });

    // Borang tempahan → buka WhatsApp
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value || 'Tiada permintaan khas';

        const whatsappText = `Hi AZ STYLE PREMIUM BARBERSHOP, saya ingin membuat tempahan:%0A%0ANama: ${encodeURIComponent(name)}%0ANo. Telefon: ${encodeURIComponent(phone)}%0APerkhidmatan: ${encodeURIComponent(service)}%0ATarikh: ${encodeURIComponent(date)}%0AMasa: ${encodeURIComponent(time)}%0ANota: ${encodeURIComponent(message)}`;

        window.open(`https://wa.me/60146328737?text=${whatsappText}`, '_blank');
    });
});
