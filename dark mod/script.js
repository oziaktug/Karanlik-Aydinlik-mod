// Buton tıklama olayını yakala
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Mod durumuna göre buton metnini değiştir
    if(body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Aydınlık Mod';
    } else {
        toggleButton.textContent = 'Karanlık Mod';
    }
});
