document.addEventListener('DOMContentLoaded', function() {
    const imageData = {
        "котенок": {
            imageUrl: "assets/images/kot.jpg",
            title: "котенок",
            source: "https://steamuserimages-a.akamaihd.net/ugc/2010329697264493667/215C3C7DCC67E291EDFA9B9C314401198F2AB0BB/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
        },
        "собака": {
            imageUrl: "assets/images/dog.jpg",
            title: "собака",
            source: "https://avatars.mds.yandex.net/i?id=0fed59659922a2b2f2abb9403ad79025ecb66294-5209702-images-thumbs&n=13"
        },
        "сессия": {
            imageUrl: "assets/images/sessia.jpg",
            title: "сессия",
            source: "https://avatars.dzeninfra.ru/get-zen_doc/3636601/pub_601c4bb0b426f776c03b7652_601ceaeba34fdb6f5827cd14/scale_1200"
        }
    };

    const searchButton = document.getElementById('searchButton');
    const keywordInput = document.getElementById('keywordInput');
    const initialView = document.getElementById('initialView');
    const resultView = document.getElementById('resultView');
    const resultTitle = document.getElementById('resultTitle');
    const outputImage = document.getElementById('outputImage');
    const sourceLink = document.getElementById('sourceLink');
    const ratingButtons = document.getElementById('ratingButtons');

    // Скрываем image-container и кнопки оценки изначально
    outputImage.style.display = 'none';
    ratingButtons.classList.add('hidden');

    searchButton.addEventListener('click', showResult);
    keywordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') showResult();
    });

    // Единая функция showResult
    function showResult() {
        const input = keywordInput.value.trim().toLowerCase();
        
        if (imageData[input]) {
            resultTitle.textContent = imageData[input].title;
            outputImage.style.backgroundImage = `url(${imageData[input].imageUrl})`;
            sourceLink.href = imageData[input].source;
            sourceLink.textContent = new URL(imageData[input].source).hostname;
            
            // Показываем image-container и кнопки оценки
            outputImage.style.display = 'block';
            ratingButtons.classList.remove('hidden');
            
            initialView.classList.add('hidden');
            resultView.classList.remove('hidden');
        } else {
            alert('Изображение не найдено. Попробуйте "котенок", "собака" или "сессия".');
            // Скрываем image-container и кнопки при ошибке
            outputImage.style.display = 'none';
            ratingButtons.classList.add('hidden');
        }
    }

    // Сброс при клике на поле ввода
    keywordInput.addEventListener('click', function() {
        initialView.classList.remove('hidden');
        resultView.classList.add('hidden');
        ratingButtons.classList.add('hidden');
        this.value = '';
    });

    // Обработчики для кнопок оценки
    document.querySelector('.like-btn').addEventListener('click', function() {
        alert('Спасибо за лайк!');
    });
    document.querySelector('.dislike-btn').addEventListener('click', function() {
        alert('Мы учтем ваш голос!');
    });
});