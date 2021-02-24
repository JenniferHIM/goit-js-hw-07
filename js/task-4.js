// Task 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const counterValue = document.querySelector('#counter');
// console.log(counterEl);

let counterValue = 0;

const counter = {
    decreaseValueBtn: document.querySelector('[data-action="decrement"]'),
    increaseValueBtn: document.querySelector('[data-action="increment"]'),
    valueSpan: document.querySelector('#value'),
  };

 counter.increaseValueBtn.addEventListener('click', incrementValue);
counter.decreaseValueBtn.addEventListener('click', decrementValue);

function incrementValue(){
	counterValue += 1;
  newValue();
}

  function decrementValue(){
	counterValue -= 1;
    newValue();
 }

 function newValue() {
    counter.valueSpan.textContent = counterValue;
  }

