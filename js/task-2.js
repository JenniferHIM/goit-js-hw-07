// Task 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsList = document.querySelector('#ingredients');
  console.log(ingredientsList);
  //const newElements = document.createElement('li');
  // console.log(newElements);
  // newElements.classList.add('list-item');
  // newElements.textContent = ingredients;

  const makeIngredientsOption = newIngredients => {
    return newIngredients.map((ingredient, i) => {
      const newElements = document.createElement('li');
      newElements.classList.add('list-item');
  newElements.textContent = `${ingredient}`;
  return newElements;

    });
  }

  const ingredientItem = makeIngredientsOption(ingredients);

  ingredientsList.append(...ingredientItem);

