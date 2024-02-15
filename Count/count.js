
let sum = 0;
const count = document.getElementById('count');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minusBtn');

plusBtn.addEventListener('click', function (e) {
    sum = sum + 1;
    count.innerText = sum
})

minusBtn.addEventListener('click', function (e) {
    sum = sum - 1;
    count.innerText = sum
})

