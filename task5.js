const numberNode = document.getElementById('number');
const limitNode = document.getElementById('limit');
const button = document.getElementById('btn');
const result = document.getElementById('result');

if (localStorage.length > 0) {
    result.innerHTML = localStorage.getItem('imagesHtml');
}

function urlCreate(num, lim) {
    return `https://picsum.photos/v2/list?page=${num}&limit=${lim}`;
}

function displayOnScreen(data) {
    let images = '';
    data.forEach(element => {
        images += `
        <img src="${element.download_url}">
        `;
    });
    result.innerHTML = images;
    localStorage.setItem('imagesHtml', images);
}

function fetchRequest(num, lim) {
    fetch(urlCreate(num, lim))
        .then((response) => {
            return response.json();
        })
        .then((data) => { displayOnScreen(data) })
}

button.addEventListener('click', () => {
    localStorage.clear();
    const number = numberNode.value;
    const limit = limitNode.value;

    if ((number < 1 || number > 10) && (limit < 1 || limit > 10)) {
        return result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }

    if (number < 1 || number > 10) {
        return result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }

    if (limit < 1 || limit > 10) {
        return result.innerHTML = "Лимит вне диапазона от 1 до 10";
    }

    fetchRequest(number, limit);
});