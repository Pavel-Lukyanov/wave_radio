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


    //Кнопки play stop
    const playBtn = document.querySelectorAll('.onair__btn');
    const stops = document.querySelectorAll('.pause');
    const starts = document.querySelectorAll('.start');

    playBtn.forEach(el => {
        el.addEventListener('click', () => {
            let stop = el.querySelector('.pause');
            let start = el.querySelector('.start');
            if (stop.classList.contains('onair-btn-active')) {
                stop.classList.remove('onair-btn-active');
                start.classList.remove('start-active');
            } else {
                stops.forEach(stoped => {
                    stoped.classList.remove('onair-btn-active');
                })
                starts.forEach(started => {
                    started.classList.remove('start-active');
                })
                stop.classList.add('onair-btn-active');
                start.classList.add('start-active');
            }
        });
    });



    //Показать больше карточек из подкаста
    const cards = document.querySelectorAll('.invisible-cards');
    let showCardsBtn = document.getElementById('showMore');

    showCardsBtn.addEventListener('click', () => {
        cards.forEach(el => {
            el.classList.toggle('visible-cards');
        })
        console.log(showCardsBtn.textContent);
        if (showCardsBtn.textContent.trim() === 'Ещё подкасты') {
            showCardsBtn.textContent = 'Скрыть';
        } else {
            showCardsBtn.textContent = 'Ещё подкасты';
        }
    })
})