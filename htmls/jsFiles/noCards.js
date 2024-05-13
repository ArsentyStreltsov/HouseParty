// noCards.js
document.addEventListener('DOMContentLoaded', function() {
    loadNewNoCard(); // Загружаем первую карточку NoCards при загрузке страницы
});

function loadNewNoCard() {
    const randomCardIndex = Math.floor(Math.random() * NoCards.length);
    const chosenCard = NoCards[randomCardIndex];
    document.getElementById('cardImage').src = chosenCard.image;
    document.getElementById('cardText').textContent = chosenCard.texts;
}

const NoCards = [
    {
        image: "cards_images/1.png",
        texts: "DJ"
    },
    {
        image: "cards_images/2.png",
        texts: "Караокемен"
    },
    {
        image: "cards_images/3.png",
        texts: "Танцор"
    },
    {
        image: "cards_images/4.png",
        texts: "Рейвер"
    },
    {
        image: "cards_images/5.png",
        texts: "Бармен"
    },
    {
        image: "cards_images/6.png",
        texts: "Текильщица"
    },
    {
        image: "cards_images/7.png",
        texts: "Заводила"
    },
    {
        image: "cards_images/8.png",
        texts: "Тамада"
    },
    {
        image: "cards_images/9.png",
        texts: "Девушка в красном"
    },
    {
        image: "cards_images/10.png",
        texts: "Девушка в синем"
    },
    {
        image: "cards_images/11.png",
        texts: "Красотка в черном"
    },
    {
        image: "cards_images/12.png",
        texts: "Красавчик"
    },
    {
        image: "cards_images/13.png",
        texts: "Мачо"
    },
    {
        image: "cards_images/14.png",
        texts: "Красавчик в черном"
    },
    {
        image: "cards_images/15.png",
        texts: "Богатый бизнесмен"
    },
    {
        image: "cards_images/16.png",
        texts: "Щедрый VIP"
    },
    {
        image: "cards_images/17.png",
        texts: "Фотограф"
    },
    {
        image: "cards_images/18.png",
        texts: "Модель"
    },
    {
        image: "cards_images/19.png",
        texts: "Вышибала"
    },
    {
        image: "cards_images/20.png",
        texts: "Молодой иностранец"
    },
    {
        image: "cards_images/21.png",
        texts: "Флешер"
    },
    {
        image: "cards_images/22.png",
        texts: "Парочка"
    },
    {
        image: "cards_images/23.png",
        texts: "Спортсмен"
    },
    {
        image: "cards_images/24.png",
        texts: "Сплетник"
    },
    {
        image: "cards_images/25.png",
        texts: "Клуб"
    }    
];