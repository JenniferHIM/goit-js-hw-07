// Task 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.oninput = function () {
    if (nameInput.value === '') {
       return nameOutput.innerHTML = 'незнакомец';
    } 
    return nameOutput.innerHTML = nameInput.value;
    }
