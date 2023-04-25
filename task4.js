const firstInput = document.getElementById('first-input-task4');
const secondInput = document.getElementById('second-input-task4');
const button = document.getElementById('btn');
const result = document.getElementsByTagName('div')[0];

const secondUrl = 'https://picsum.photos/';

function fetchRequest(firstVal, secondVal) {
    const modifiedUrl = secondUrl + firstVal + '/' + secondVal;
    fetch(modifiedUrl)
        .then(response => {
            return response;
        })
        .then(data => {
            display(data);
        })
}

function display(data) {
    result.innerHTML = `<img src="${data.url}">`;
}

button.addEventListener('click', () => {
    const firstVal = firstInput.value;
    const secondVal = secondInput.value;
    if (firstVal >= 100 && firstVal <= 300 && secondVal >= 100 && secondVal <= 300) {
        fetchRequest(firstVal, secondVal);
    } else {
        result.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
})