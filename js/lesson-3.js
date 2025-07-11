// ! ===========================================================================================

/* 1

Дано масив чисел [1, 2, 3, 4, 5].
Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. 
Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map(numbers => numbers ** 2);
console.log(newArray);

*/

// ! ===========================================================================================

/* 2.

Дано масив об'єктів.
Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. 
Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const newArray = data.flatMap(number => number.values);
console.log(newArray);

*/

// ! ===========================================================================================

/* 3.

Дано масив об'єктів. 
Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
Очікуваний результат: true.

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const ageUnderTwenty = people.some(person => person.age < 20);
console.log(ageUnderTwenty);

*/

// ! ===========================================================================================

/* 4.

Дано масив чисел [2, 4, 6, 8, 10]. 
Перевірте, чи є кожен елемент масиву парним.
Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const hasEveryElem = numbers.every(number => number % 2 === 0);
console.log(hasEveryElem);

*/

// ! ===========================================================================================

/* 5.

Знайдіть перше непарне число

const numbers = [2, 1, 6, 8, 9, 10, 12];

const findFirstEenNumber = numbers.find(number => number % 2 !== 0);
console.log(findFirstEenNumber);

*/

// ! ===========================================================================================

/* 6.

Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання.
Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const newNumbersArray = numbersArray.toSorted(
  (firstNumber, secondNumber) => firstNumber - secondNumber
);
console.log(newNumbersArray);

*/

// ! ===========================================================================================

/* 7.

Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. 
Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];
const inAlphabetOrder = stringArray.toSorted((firstWord, secondWord) =>
  firstWord.localeCompare(secondWord)
);

console.log(inAlphabetOrder);

*/

// ! ===========================================================================================

/* 8.

Відсортуйте масив об'єктів за віком у порядку зростання. 
Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const newNumbersArray = users.toSorted(
  (firstNumber, secondNumber) => firstNumber.age - secondNumber.age
);
console.log(newNumbersArray);

*/

// ! ===========================================================================================

/* 9.

Дано масив об'єктів. 
Створіть новий масив, що містить тільки об'єкти, в яких  вік більше 20 років. 
Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const names = users.filter(user => user.age > 20);
console.log(names);

*/

// ! ===========================================================================================

/* 10.

Дано масив чисел [1, 2, 3, 4, 5]. 
Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

const calculateNumbers = numbers.reduce((total, number) => total + number, 0);
console.log(calculateNumbers);

*/

// ! ===========================================================================================

/* 11.

Розроби клас Calculator, який дозволяє виконувати арифметичні операції над числом за допомогою методів класу, підтримуючи ланцюжковий виклик (method chaining).

Вимоги до класу Calculator:

Метод number(value)
- Встановлює початкове значення для наступних обчислень.
- Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

Метод getResult, Повертає поточний результат усіх операцій.
- Не змінює значення, просто повертає його.

Метод add - Додає value до поточного значення.
- Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

Метод substruct - Віднімає value від поточного значення. Повертає this.

Метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
- Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
- Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

Метод multiply -Множить поточне значення на value. Повертає this.
Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {
  constructor() {
    this.value = 0; // Початкове значення
  }

  number(value) {
    this.value = value;
    return this; // Повертаємо сам об'єкт для chaining
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Ділення на нуль неможливе');
    }
    this.value /= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();

const result = calc
  .number(10) // Встановлюємо 10
  .add(5) // +5 = 15
  .subtract(3) // -3 = 12
  .multiply(4) // *4 = 48
  .divide(2) // /2 = 24
  .getResult(); // Отримуємо результат

console.log(result); // 24

*/

// ! ===========================================================================================

/* 12.

Напиши клас Notes який управляє колекцією нотаток у властивості items.
Нотатка - це об'єкт із властивостями text i priority.
Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
Додай методи addNote (note), removeNote(text), updatePriority(text, newPriority)

class Notes {
  constructor() {
    this.items = [];
  }

  static Priority() {
    return {
      LOW: 'low',
      NORMAL: 'normal',
      HIGH: 'high',
    };
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter((note) => note.text !== text);
  }

  updatePriority(text, newPriority) {
    const note = this.items.find((note) => note.text === text);
    if (note) {
      note.priority = newPriority;
    }
  }
}

const myNotes = new Notes();

myNotes.addNote({ text: 'Вивчити JavaScript', priority: Notes.Priority().HIGH });
myNotes.addNote({ text: 'Купити хліб', priority: Notes.Priority().LOW });

console.log(myNotes.items);
/ [
/   { text: 'Вивчити JavaScript', priority: 'high' },
/   { text: 'Купити хліб', priority: 'low' }
/ ]

myNotes.updatePriority('Купити хліб', Notes.Priority().NORMAL);
console.log(myNotes.items);
/ [
/   { text: 'Вивчити JavaScript', priority: 'high' },
/   { text: 'Купити хліб', priority: 'normal' }
/ ]

myNotes.removeNote('Вивчити JavaScript');
console.log(myNotes.items);
/ [
/   { text: 'Купити хліб', priority: 'normal' }
/ ]

*/

// ! ===========================================================================================

/* 13.

Напиши клас Client який створює об'єкт з властивостями login email.
Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email


class Client {
  #login;
  #email;

  constructor(params) {
    this.#email = params.email;
    this.#login = params.login;
  }

  get email() {
    return this.#email;
  }

  set email(newEmaile) {
    this.#email = newEmaile;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
}

const client = new Client('Mango', 'mango@mail.com');

console.log(client.login); // "Mango"
console.log(client.email); // "mango@mail.com"

client.login = 'Poly';
client.email = 'poly@mail.com';

console.log(client.login); // "Poly"
console.log(client.email); // "poly@mail.com"


*/

// ! ===========================================================================================

/* 14.

Наслідування у класах!
Cтворіть клас `Person`, який містить наступні властивості:
- `name` - ім'я людини;
- `age`- вік людини;
- `gender` - стать людини;
- `email`- електронна пошта людини.
  
Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  
Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
- salary - зарплата співробітника;
- department - відділ, в якому працює співробітник.
  
Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  static Gender = {
    MALE: 'male',
    FEMALE: 'female',
  };

  #email;

  constructor(personParams) {
    this.name = personParams.name;
    this.age = personParams.age;
    this.#email = personParams.email;
    this.gender = personParams.gender;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      email: this.#email,
      gender: this.gender,
    };
  }
}

class Employee extends Person {
  #salary;

  static Department = {
    SALES: 'sales',
    ACCOUNTING: 'accounting',
    DEVELOPMENT: 'development',
  };

  constructor(employeeParams) {
    super(employeeParams);

    this.#salary = employeeParams.salary;
    this.department = employeeParams.department;
  }

  getEmployeeDetails() {
    return {
      name: this.name,
      salary: this.#salary,
      department: this.department,
    };
  }
}

const employee = new Employee({
  name: 'Іван',
  age: 28,
  email: 'ivan@example.com',
  gender: Person.Gender.MALE,
  salary: 7000,
  department: Employee.Department.DEVELOPMENT,
});

console.log(employee.getDetails());
console.log(employee.getEmployeeDetails());

*/

// ! ===========================================================================================
