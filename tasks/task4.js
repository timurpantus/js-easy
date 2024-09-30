// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  function findMax(numbers) {
    // Ініціалізуємо змінну для зберігання найбільшого числа
    let max = numbers[0]; // Припустимо, що перший елемент - найбільший
  
    // Проходимо через кожен елемент масиву
    for (let i = 1; i < numbers.length; i++) {
      // Якщо поточний елемент більше за max, оновлюємо max
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max; // Повертаємо найбільше число
  }
  
  // Приклади використання:
  console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
  console.log(findMax([10, 20, 5, 30])); // Виведе: 30
  
  module.exports = findMax;
  
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;