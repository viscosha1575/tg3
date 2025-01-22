document.addEventListener("DOMContentLoaded", function () {
    const tg = window.Telegram.WebApp;

    // Telegram Web App initialization
    tg.ready();
    tg.expand(); // Расширить приложение на весь экран

    function startGame() {
        // Переход к игровому интерфейсу или началу игры
        alert("Игра началась!");
        // Здесь можно вызвать логику для перехода на другую страницу
        window.location.href = "gameMain.html"; // Укажите путь к странице игры
    }

    // Обработчик кнопки "Play"
    const playButton = document.querySelector(".play-button");
    playButton.addEventListener("click", startGame);

    console.log("Telegram Mini App Initialized");
});
