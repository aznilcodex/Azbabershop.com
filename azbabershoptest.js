// Bila borang dihantar → buka WhatsApp dengan mesej lengkap
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Hentikan tindakan hantar biasa

    // Ambil semua nilai dari borang
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value || 'Tiada permintaan khas';

    // Susun mesej untuk WhatsApp
    const whatsappText = `Hi AZ STYLE PREMIUM BARBERSHOP, saya ingin membuat tempahan:%0A%0ANama: ${encodeURIComponent(name)}%0ANo. Telefon: ${encodeURIComponent(phone)}%0APerkhidmatan: ${encodeURIComponent(service)}%0ATarikh: ${encodeURIComponent(date)}%0AMasa: ${encodeURIComponent(time)}%0ANota: ${encodeURIComponent(message)}`;

    // Buka WhatsApp dalam tab baharu
    window.open(`https://wa.me/60146328737?text=${whatsappText}`, '_blank');
});
