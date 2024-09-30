// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  function reverseWithoutNumbers(str) {
    // Фільтруємо лише літери, а потім обертаємо їх
    const filtered = str.replace(/[0-9]/g, ''); // видаляємо всі цифри
    return filtered.split('').reverse().join(''); // обертаємо рядок
  }
  
  // Перевірка функції
  console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
  console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"
  
  module.exports = reverseWithoutNumbers;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;