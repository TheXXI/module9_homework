const input = document.getElementById('input');
const button = document.querySelector('#btn');
const result = document.getElementsByTagName('div')[0];

const url = 'https://picsum.photos/v2/list?limit=';

function request(num) {
    const xhr = new XMLHttpRequest();

    xhr.open('get', url + num);

    xhr.onload = () => {
        if (xhr.status == 200) {
            displayOnScreen(JSON.parse(xhr.response));
        } else {
            console.log('Статус ответа: ', xhr.status);
        }
    };

    xhr.onprogress = function(event) {
        console.log(`Загружено ${event.loaded} из ${event.total}`)
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}

function displayOnScreen(data) {
    let html = '';

    data.forEach(element => {
        let img = `<img src="${element.download_url}" style="width:300px; height:300px;">`;
        html += img;
    });
    result.innerHTML = html;
}

button.addEventListener('click', () => {
    result.innerHTML = null;
    if (input.value >= 1 && input.value <= 10) {
        request(input.value)
    } else {
        result.innerHTML = 'число вне диапазона от 1 до 10'
    }
});