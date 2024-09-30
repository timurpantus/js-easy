// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  function replaceVowels(str) {
    // Використовуємо метод replace з регулярним виразом для заміни голосних
    return str.replace(/[aeiou]/gi, '*');
  }
  
  // Перевірка функції
  console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
  console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"
  
  module.exports = replaceVowels;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;