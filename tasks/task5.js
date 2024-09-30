// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  function countOccurrences(str, char) {
    let count = 0; // Ініціалізуємо змінну для зберігання кількості входжень
  
    // Проходимо через кожен символ рядка
    for (let i = 0; i < str.length; i++) {
      // Якщо символ співпадає з char, збільшуємо лічильник
      if (str[i] === char) {
        count++;
      }
    }
  
    return count; // Повертаємо кількість входжень
  }
  
  // Приклади використання:
  console.log(countOccurrences("hello world", 'o')); // Виведе: 2
  console.log(countOccurrences("banana", 'a'));       // Виведе: 3
  
  module.exports = countOccurrences;
  
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences;