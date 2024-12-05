const textElement = document.getElementById('text');

textElement.addEventListener('mouseover', function() {
    textElement.style.color = 'blue'; // Ganti warna saat hover
});

textElement.addEventListener('mouseout', function() {
    textElement.style.color = ''; // Kembalikan warna saat mouse keluar
});