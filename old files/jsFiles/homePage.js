document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const mainContent = document.getElementById('mainContent'); // Убедитесь, что это добавлено

    video.addEventListener('ended', function() {
        mainContent.style.display = 'block'; // Показать основное содержимое
        video.style.display = 'none'; // Скрыть видео
    });
});