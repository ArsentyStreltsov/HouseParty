function adjustGameScreen() {
    var height = window.innerHeight; // Получаем высоту окна
    var width = (height * 9) / 16; // Рассчитываем ширину с сохранением пропорций 9:16
    var gameScreen = document.querySelector('.game_screen');
    gameScreen.style.width = width + 'px'; // Устанавливаем ширину
}

// Вызываем функцию при загрузке и изменении размера окна
window.onresize = adjustGameScreen;
window.onload = adjustGameScreen;


function goToHomePage() {
    sessionStorage.clear();  // Очищаем sessionStorage
    location.href = 'index.html';  // Переход на главную страницу
}