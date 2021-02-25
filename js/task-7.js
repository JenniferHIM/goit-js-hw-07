// Task 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector('#font-size-control');
// console.log(input);
const span = document.querySelector('#text');
// console.log(span);
input.addEventListener('input', onInput);

function onInput (event) {
    let startValueRange = +event.target.value;
  // console.log(startValueRenge);
  span.style.fontSize = `${startValueRange + 80}%`;
   // console.log(span);
}
