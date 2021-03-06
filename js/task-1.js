// Task 1
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4


// Ниже (написанный код) - посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'
const categoriesItem = document.querySelector('#categories');
const elementsItem = document.querySelectorAll('.item');
console.log(`Есть ${elementsItem.length} категории в списке`);

// Ниже (написанный код) - для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).
elementsItem.forEach(element => {
    console.log(    
        `Категория: ${element.firstElementChild.textContent}
    Количество элементов: ${element.querySelectorAll('li').length}`);
});