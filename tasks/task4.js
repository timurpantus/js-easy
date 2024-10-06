// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  // Перевірка, чи масив не пустий
  if (numbers.length === 0) {
    return undefined; // Повертаємо undefined, якщо масив пустий
  }

  let max = numbers[0]; // Ініціалізуємо максимальне значення першим елементом масиву

  // Перебираємо всі елементи масиву
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Якщо знайшли число більше за поточне максимальне, оновлюємо max
    }
  }

  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;
