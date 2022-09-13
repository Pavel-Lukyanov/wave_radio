document.addEventListener("DOMContentLoaded", function () {
    
    //Поиск по сайту
    const search = document.getElementById('search');
    const showButton = search.querySelector('button');
    const searchInput = search.querySelector('input');

    showButton.addEventListener('click', () => {
        searchInput.classList.toggle('search-form__input-active');
    })

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(search);
        if (!withinBoundaries) {
            searchInput.classList.remove('search-form__input-active');
        }
    })


    //Кнопки play stop в header
    const playBtn = document.querySelectorAll('.onair__btn');
    playBtn.forEach(el => {
        el.addEventListener('click', () => {
            let stop = el.querySelector('.pause');
            stop.classList.toggle('onair-btn-active');
        });
    });
})