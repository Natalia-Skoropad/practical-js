// ! ===========================================================================================

// УМОВА 1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// РІШЕННЯ

// Крок 1: створення масиву
// const styles = ['jazz', 'blues'];

// Крок 2: додавання елемента в кінець масиву
// styles.push('rock-n-roll');

// Крок 3: заміна елемента 'blues' на 'classic'
// const index = styles.indexOf('blues');
// if (index !== -1) {
//   styles[index] = 'classic';
// }

// Крок 4: оголошення функції logItems
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//      console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// Перевірка
// logItems(styles);

// ! ===========================================================================================
// УМОВА 2

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// РІШЕННЯ

// function checkLogin(array) {
//   const userInput = prompt('Введіть логін');

//   if (array.includes(userInput)) {
//     alert(`Welcome, ${userInput}!`);
//   } else {
//     alert('User not found');
//   }
// }

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];
// checkLogin(logins);

// ! ===========================================================================================
// УМОВА 3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// РІШЕННЯ

// function caclculateAverage() {
//   let total = 0;

//   for (const arg of arguments) {
//     if (typeof arg !== 'number') {
//       return 'Усі аргументи мають бути числами!';
//     }
//     total += arg;
//   }

//   return total / arguments.length;
// }

// console.log(caclculateAverage(1, 2, 3)); // 2
// console.log(caclculateAverage(5, 'hello', 10)); // Усі аргументи мають бути числами!

// ! ===========================================================================================
// УМОВА 4

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// РІШЕННЯ 1
// function sumPairsAndPush(arr) {
//   const newArray = [];
//   if (arr.length < 2) {
//     return arr;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArray.push(arr[i] + arr[i + 1]);
//   }
//   return newArray;
// }

// РІШЕННЯ 2
// console.log(sumPairsAndPush(22, 11, 34, 5, 12, 13, 14, 15));

// function sumNeighbors(array) {
//   const result = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     const sum = array[i] + array[i + 1];
//     result.push(sum);
//   }

//   return result;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumNeighbors(someArr)); // [33, 45, 39, 17, 25, 27, 29]

// ! ===========================================================================================
// УМОВА 5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// РІШЕННЯ

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Sorry, it is not an array!';
//   }

//   let min = numbers[0];

//   for (const num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }

//   return min;
// }

// Приклад
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers)); // 2
// console.log(findSmallestNumber('not an array')); // 'Sorry, it is not an array!'

// ! ===========================================================================================
// УМОВА 6

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// РІШЕННЯ
// function findLongestWord(string) {
//   const words = string.split(' ');

//   let longestWord = '';

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// ! ===========================================================================================
// УМОВА 7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// РІШЕННЯ

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// ! ===========================================================================================
// УМОВА 8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// РІШЕННЯ

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({}));

// ! ===========================================================================================
// УМОВА 9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

/*
РІШЕННЯ 1
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.hasOwnProperty('a') && this.hasOwnProperty('b');
  },

  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return 'No such propeties';
    }
  },

  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return 'No such propeties';
    }
  },
};

РІШЕННЯ 2
const calculator = {
  a: null,
  b: null,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== null && this.b !== null;
  },

  sum() {
    if (!this.exist()) {
      return 'No such properties';
    }
    return this.a + this.b;
  },

  mult() {
    if (!this.exist()) {
      return 'No such properties';
    }
    return this.a * this.b;
  },
};
*/

// ! ===========================================================================================
// УМОВА 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

/*

РІШЕННЯ
const listOfFruits = {
  fruits: [
    { name: 'Яблуко', price: 45, quantity: 7 },
    { name: 'Апельсин', price: 60, quantity: 4 },
    { name: 'Банан', price: 125, quantity: 8 },
    { name: 'Груша', price: 350, quantity: 2 },
    { name: 'Виноград', price: 440, quantity: 3 },
    { name: 'Банан', price: 125, quantity: 3 },
  ],

  calcTotalPrice(fruits, fruitName) {
    let total = 0;

    for (const fruit of fruits) {
      if (fruit.name === fruitName) {
        total += fruit.price * fruit.quantity;
      }
    }

    return total;
  },
};

*/
