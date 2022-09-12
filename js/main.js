document.addEventListener("DOMContentLoaded", function () {
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
})