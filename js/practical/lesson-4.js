// ! ===========================================================================================

/* 1.

******   УМОВА   ******
1 - отримай body елемент і виведи його в консоль;
2 - отримай елемент id="title" і виведи його в консоль;
3 - отримай елемент class="list" і виведи його в консоль;
4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення,
яке зберігається у змінній currentTopic і виведи його в консоль;
14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа
(Document Object Model)"
18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один
спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити
всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
20 - очисти список

(.html)
<div class="container">
    <h1 id="title">Базові операції з DOM</h1>

    <ul class="list">
        <li data-topic="navigation">
            <h3>Навігація по DOM</h3>
            <p>
                Доступ до DOM починається з об'єкта document, з нього можна дістатися
                до будь-яких елементів.
            </p>
        </li>

        <li data-topic="search">
            <h3>Пошук елементів</h3>
            <p>
                Група методів elem.querySelector* - це сучасний стандарт для пошуку
                елементів.
            </p>
        </li>

        <li data-topic="props">
            <h3 class="completed">Властивості та атрибути</h3>
            <p>
                elem.textContent, elem.classList, elem.style, elem.hasAttribute(name),
                elem.getAttribute(name), elem.setAttribute(name, value),
                elem.removeAttribute(name)
            </p>
        </li>

        <li data-topic="manipulation">
            <h3>Створення та видалення елементів</h3>
            <p>
                DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й
                видаляти, а також створювати нові елементи, після чого додавати їх в
                документ.
            </p>
        </li>
    </ul>
</div>

(.css)
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

section {
  padding: 50px 0;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.active {
  color: red;
}

.task-title {
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  text-decoration: underline;
  margin-bottom: 100px;
}

.container {
  width: 1440px;
  margin: 0 auto;
  padding: 0px 40px;
}

******   РІШЕННЯ   ******
(.js)
/(Варіант 1) (1) отримай body елемент і виведи його в консоль;/
const bodyEl1 = document.querySelector('body');
console.log(bodyEl1);

/(Варіант 2) (1)/
const bodyEl2 = document.body;
console.log(bodyEl2);

/(Варіант 3) (1)/
const refs = {
  body: document.body,
  title: document.querySelector('#title'),
  list: document.querySelector('.list'),
  topics: document.querySelectorAll('[data-topic]'),
  topicFirst: document.querySelector('[data-topic]'),
};

console.dir(refs.body);
console.dir(refs.title);
console.dir(refs.list);
console.dir(refs.topics);
console.dir(refs.topicFirst);

*****

/(Варіант 1) (2) отримай елемент id="title" і виведи його в консоль;/
const titleEl = bodyEl1.querySelector('#title');
console.log(titleEl);

*****

/(Варіант 1) (3) отримай елемент class="list" і виведи його в консоль;/
const listEl = bodyEl1.querySelector('.list');
console.log(listEl);

*****

/(Варіант 1) (4) отримай всі елементи з атрибутом data-topic і виведи їх в консоль;/
const dataTopicElements = listEl.querySelectorAll('[data-topic]');
console.log(dataTopicElements);

*****

/(Варіант 1) (5) отримай перший елемент зі списку всіх елементів з атрибутом data-topic і виведи його в консоль;/
const dataTopicFirstEl = listEl.querySelector('[data-topic]');
console.log(dataTopicFirstEl);

/(Варіант 2) /
const dataTopicFirstEl2 = refs.topics[0];
console.log(dataTopicFirstEl2);

/(Варіант 3)/
const dataTopicFirstEl3 = dataTopicElements[0];
console.log(dataTopicFirstEl3);

*****

/(Варіант 1) (6) отримай останній елемент зі списку всіх елементів з атрибутом data-topic і виведи його в консоль;/
const dataTopicLastEl = refs.topics[refs.topics.length - 1];
console.log(dataTopicLastEl);

/(Варіант 2)/
const dataTopicEl3 = dataTopicElements[dataTopicElements.length - 1];
console.log(dataTopicEl3);

*****

/(Варіант 1) (7) який елемент є сусідом для h1? Знайти і виведи його в консоль;/
const nextTitleSibling = refs.title.nextElementSibling;
console.log(nextTitleSibling);

/(Варіант 2)/
const nextTitleSibling2 = titleEl.nextElementSibling;
console.log(nextTitleSibling2);

*****

/(Варіант 1) (8) по тегу h3 знайти всі заголовки та виведи їх у консоль;/
const navigationTitle = document.querySelectorAll('h3');
console.log(navigationTitle);

*****

/(Варіант 1) (9) для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір/
navigationTitle.forEach(item => {
  item.classList.add('active');
});

*****

/(Варіант 1) (10) знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;/
const hasDataTopicNavigation = document.querySelector(
  'li[data-topic="navigation"]'
);

console.log(hasDataTopicNavigation.dataset.topic);
console.log(hasDataTopicNavigation);

*****

/(Варіант 1) (11) додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим/
hasDataTopicNavigation.style.backgroundColor = 'yellow';

*****

/(Варіант 1) (12) у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!"./
const setTextColor = (hasDataTopicNavigation.querySelector('p').textContent =
  'Я змінив тут текст!');


*****

/(Варіант 1) (13) створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;/

const currentTopic = document.querySelector('li[data-topic="manipulation"]');
console.log(currentTopic.dataset.topic);

*****

/(Варіант 1) (14) додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;/
currentTopic.style.backgroundColor = 'blue';

*****

/(Варіант 1) (15) знайти в документі заголовок, який має class="completed" і виведи його в консоль;/
const titleElHasClassCompleted = document.querySelector('.completed');
console.log(titleElHasClassCompleted);

*****

/(Варіант 1) (16) видали елемент li в якому знаходиться заголовок, який має class="completed"/

/ Перевіряємо, чи було знайдено елемент/
if (titleElHasClassCompleted) {
  / Отримуємо батьківський елемент/
  var parent = titleElHasClassCompleted.parentNode;

  / Видаляємо елемент із батьківського елемента/
  if (parent) {
    parent.removeChild(titleElHasClassCompleted);
  }
}

*****

/(Варіант 1) (17) після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документ (Document Object Model)"/

const paragraph = document.createElement('p');
paragraph.textContent = "Об'єктна модель документ (Document Object Model)";

/ Вставляємо новий параграф перед списком/
titleEl.parentNode.insertBefore(paragraph, nextTitleSibling);

*****

/(Варіант 1) (18) додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку/

/ Створюємо новий елемент списку/
const newListItem = document.createElement('li');

/ Створюємо заголовок/
const heading = document.createElement('h3');
heading.textContent = 'Властивість innerHTML';

/ Створюємо опис /
const par = document.createElement('p');
par.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';

/ Додаємо заголовок та опис до елементу списку /
newListItem.appendChild(heading);
newListItem.appendChild(par);

/ Додаємо новий елемент списку до кінця списку /
listEl.appendChild(newListItem);

(Варіант 2)
const newListItem = `<li data-topic="manipulation">
                <h3>Властивість innerHTML</h3>
                <p>
                    'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
                </p>
            </li>`;

listEl.innerHTML += newListItem;

*****

/(Варіант 1) (19) зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()/

const newItem = document.createElement('li'); // Створюємо новий елемент LI

newItem.innerHTML = `
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
`; // Заповнюємо елемент HTML-вмістом

listEl.appendChild(newItem); // Додаємо новий елемент в кінець списку

*****

/(Варіант 1) (20) очисти список (видалити всі дочірні елементи всередині списку <ul>, тобто залишити сам тег списку, але без жодного <li>)/

/ listEl.innerHTML = '';/

/(Варіант 2)/
while (listEl.firstChild) {
  listEl.removeChild(listEl.firstChild);
}

*/

// ! ===========================================================================================

/* 2.

Створіть контейнер div (з класом number-container) в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
- Парні числа повинні мати зелений фон (додати клас even), 
- Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

(.html)
<div class="container">
    <div class="number-container"></div>
</div>

(.css)
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

section {
  padding: 50px 0;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task-title {
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  text-decoration: underline;
  margin-bottom: 100px;
}

.container {
  width: 1440px;
  margin: 0 auto;
  padding: 0px 40px;
}

.module-title {
  text-align: center;
}

.number-container {
  display: flex;
  flex-wrap: wrap;
}

.number {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  margin: 5px;
}

.even {
  background-color: #8bc34a;
}

.odd {
  background-color: #ffed3b;
}

(.js) Приклад 1
Ось скрипт, який:
- створює 100 елементів з випадковими числами від 1 до 100;
- додає клас .even або .odd залежно від парності числа;
- вставляє ці елементи в контейнер:

const numberContainer = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = number;

  if (number % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd');
  }

  numberContainer.appendChild(div);
}

*****

(.js) Приклад 2
JS з insertAdjacentHTML() та шаблонними рядками:

numberContainer = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const className = number % 2 === 0 ? 'even' : 'odd';

  const markup = `
    <div class="number ${className}">
      ${number}
    </div>
  `;

  numberContainer.insertAdjacentHTML('beforeend', markup);
}

- className обирає, який клас (even або odd) призначити;
- шаблонний рядок `...` формує HTML блок;
- insertAdjacentHTML('beforeend', markup) додає HTML прямо в кінець контейнера;
- це швидкий і зручний спосіб, коли треба масово додавати елементи.

*****

(.js) Приклад 3
JS (функціональний підхід)

const numberContainer = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const markup = Array.from({ length: 100 }, () => {
  const number = randomNumber();
  const className = number % 2 === 0 ? 'even' : 'odd';
  return `<div class="number ${className}">${number}</div>`;
}).join('');

numberContainer.innerHTML = markup;

Що тут цікавого:
- Array.from({ length: 100 }) створює масив із 100 елементів;
- у кожному .map() генерується div з числом і відповідним класом;
- .join('') збирає всі div в один рядок HTML;
- numberContainer.innerHTML = markup вставляє весь HTML одразу.

Цей варіант:
- зручний, коли треба швидко створити багато однотипних елементів;
- читається як декларативний "потік дій".

*****

(.js) Приклад 4
const numberContainer = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

let markup = '';
let className = '';

for (let i = 0; i < 100; i++) {
  const number = randomNumber();

  if (number % 2 === 0) {
    className = 'even';
  } else {
    className = 'odd';
  }

  markup += `
    <div class="number ${className}">
      ${number}
    </div>
  `;
}

numberContainer.innerHTML = markup;

*****
(.js) Приклад 5

const numberContainer = document.querySelector('.number-container');
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const elements = [];

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = number;

  if (number % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd');
  }

  elements.push(div);
}

numberContainer.append(...elements);

*/

// ! ===========================================================================================

/* 3.

При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

(.html)
<div>
    <p class="taskTitle">ЗАДАЧА 8</p>
    <div class="statList">
        <button class="calcButton" data-number="5">Button #1</button>
        <button class="calcButton" data-number="2">Button #2</button>
        <button class="calcButton" data-number="10">Button #3</button>
        <button class="calcButton" data-number="50">Button #4</button>
        <button class="calcButton" data-number="0">Button #5</button>
        <button class="calcButton" data-number="20">Button #6</button>
    </div>
    <button id="resultButton">Вивести результат</button>
    <div id="resultSection"></div>
</div>

(.css)
.taskTitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.statList {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.calcButton {
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.calcButton:hover {
  background-color: #1976d2;
}

#resultButton {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  display: block;
  margin: 0 auto 20px auto;
}

#resultButton:hover {
  background-color: #388e3c;
}

#resultSection {
  text-align: center;
  font-size: 18px;
  color: #333;
}

#resultSection ul {
  list-style: none;
  padding: 0;
}

#resultSection li {
  margin-bottom: 5px;
}

(.js) Приклад 1
const buttons = document.querySelectorAll('.calcButton');
const resultButton = document.getElementById('resultButton');
const resultSection = document.getElementById('resultSection');

/ Обʼєкт для збереження статистики натискань/
const clickStats = {};
let total = 0;

buttons.forEach((button, index) => {
  const label = `Button #${index + 1}`;

  / Ініціалізація статистики /
  clickStats[label] = 0;

  button.addEventListener('click', () => {
    const value = Number(button.dataset.number);
    total += value;
    clickStats[label] += 1;
  });
});

resultButton.addEventListener('click', () => {
  let statsMarkup = `<p><strong>Загальна сума:</strong> ${total}</p>`;
  statsMarkup += `<ul>`;

  for (const [buttonLabel, count] of Object.entries(clickStats)) {
    statsMarkup += `<li>${buttonLabel} натиснута: ${count} раз(и)</li>`;
  }
  
  statsMarkup += `</ul>`;
  resultSection.innerHTML = statsMarkup;
});

*****

(.js) Приклад 2
const buttons = document.querySelectorAll('.calcButton');
const resultButton = document.getElementById('resultButton');
const resultSection = document.getElementById('resultSection');

let clickStats = {};
let total = 0;

/ Функція ініціалізації статистики/
function initializeStats() {
  clickStats = {};
  total = 0;
  buttons.forEach((_, index) => {
    const label = `Button #${index + 1}`;
    clickStats[label] = 0;
  });
}

/ Початкова ініціалізація/
initializeStats();

buttons.forEach((button, index) => {
  const label = `Button #${index + 1}`;

  button.addEventListener('click', () => {
    const value = Number(button.dataset.number);
    total += value;
    clickStats[label] += 1;
  });
});

resultButton.addEventListener('click', () => {
  let statsMarkup = `<p><strong>Загальна сума:</strong> ${total}</p>`;
  statsMarkup += `<ul>`;

  for (const [buttonLabel, count] of Object.entries(clickStats)) {
    statsMarkup += `<li>${buttonLabel} натиснута: ${count} раз(и)</li>`;
  }
  
  statsMarkup += `</ul>`;
  resultSection.innerHTML = statsMarkup;

  / Після виводу - скидаємо статистику/
  initializeStats();
});

*****
(.js) Приклад 3
const statListElem = document.querySelector('.statList');
const resultButtonEl = document.querySelector('#resultButton');
const resultSection = document.querySelector('#resultSection');

let total = 0;
let statClicks = {};

statListElem.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  total += Number(e.target.dataset.number);

  const label = e.target.textContent;
  statClicks[label] = (statClicks[label] || 0) + 1;
});

resultButtonEl.addEventListener('click', () => {
  / Очищаємо старий результат /
  resultSection.innerHTML = '';

  / Виводимо загальну суму /
  const totalEl = document.createElement('p');
  totalEl.textContent = `Загальна сума: ${total}`;
  resultSection.appendChild(totalEl);

  / Виводимо статистику натискань /
  const statsTitle = document.createElement('p');
  statsTitle.textContent = 'Статистика натискань:';
  resultSection.appendChild(statsTitle);

  const ul = document.createElement('ul');
  for (let key in statClicks) {
    const li = document.createElement('li');
    li.textContent = `${key} — ${statClicks[key]} раз(ів)`;
    ul.appendChild(li);
  }
  resultSection.appendChild(ul);

  / Скидаємо /
  total = 0;
  statClicks = {};
});


*/

// ! ===========================================================================================

/* 4.

Form Events, Input, Focus, Blur and Submit.
Використовуй шаблон форми з файлу html.

1 - При події `input`, якщо користувач ввів в поле більше 6 символів, то додати клас `success`.
Якщо ж символів менше аніж 6, то клас `error`

2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль.

У разі, якщо користувач не виконав одну із умов, виведи повідомлення.
Також при події інпут реалізуй додавання  ім`я користувача у span, замість слова "Anonymous".
Якщо користувач ввів ім`я, а потім видалив, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous".
При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.

(.html)
<div class="container">
    <p class="task-title">Task 3</p>
    <form class="contact-form js-contact-form">
        <input name="userName" type="text" class="contact-form-input js-username-input" data-length="8"
            placeholder="Your name" />
        <label class="js-policy-label">
            <input type="checkbox" name="accept" class="contact-form-checkbox js-policy-checkbox" />
            Я <span class="js-username-output">Anonymous</span> погоджуюсь із
            політикою конфіденційності
        </label>
        <button type="submit" class="contact-form-btn js-contact-form-submit">
            Відправити
        </button>
    </form>
 </div>

(.css)
* {
  box-sizing: border-box;
}

body {
  background-color: #f8f9fa;
  color: #333;
  font: 1.2em / 1.5 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
}

section {
  padding: 50px 0;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.task-title {
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 60px;
  text-align: center;
}

.container {
  width: 1440px;
  margin: 0 auto;
  padding: 0px 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}

.contact-form-input {
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  transition: outline 0.3s ease, border 0.3s ease;
}

.contact-form-btn {
  padding: 12px 20px;
  border: none;
  background-color: #574fd6;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.contact-form-btn:hover {
  background-color: #574fd6;
}

.success {
  outline: 3px solid limegreen;
}

.error {
  outline: 3px solid red;
}

span {
  text-decoration: underline;
  font-weight: 600;
  color: #574fd6;
}

******   РІШЕННЯ   ******
(.js)
const contactFormEl = document.querySelector('.js-contact-form');
const contactFormInputEl = contactFormEl.querySelector('.js-username-input');
const policyCheckboxEl = contactFormEl.querySelector('.js-policy-checkbox');
const userNameOutputEl = contactFormEl.querySelector('.js-username-output');

/ Подія input /
contactFormInputEl.addEventListener('input', () => {
  const value = contactFormInputEl.value;

  / Клас (success/error) /
  if (value.length > 6) {
    contactFormInputEl.classList.add('success');
    contactFormInputEl.classList.remove('error');
  } else {
    contactFormInputEl.classList.add('error');
    contactFormInputEl.classList.remove('success');
  }

  / Вивід у span /
  userNameOutputEl.textContent = value.trim() === '' ? 'Anonymous' : value;
});

/ Подія focus /
contactFormInputEl.addEventListener('focus', () => {
  contactFormInputEl.style.outline =
    contactFormInputEl.value.trim() === ''
      ? '3px solid red'
      : '3px solid green';
});

/ Подія blur /
contactFormInputEl.addEventListener('blur', () => {
  contactFormInputEl.style.outline =
    contactFormInputEl.value.trim() === '' ? '3px solid red' : '3px solid lime';
});

/ Подія submit /
contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const userName = contactFormInputEl.value.trim();
  const accept = policyCheckboxEl.checked;

  if (userName === '' || !accept) {
    alert('Будь ласка, введіть ім’я і прийміть політику.');
    return;
  }

  const user = { userName };
  console.log(user);

  / Скидання /
  contactFormEl.reset();
  userNameOutputEl.textContent = 'Anonymous';
  contactFormInputEl.classList.remove('success', 'error');
  contactFormInputEl.style.outline = '';
});

*/

// ! ===========================================================================================

/* 5.

Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
- При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
- При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

(.html)
<div class="container">
    <p class="task-title">Task 4</p>
    <div>
        <div class="box"></div>
        <button class="js-decrease" id="decrease">Зменьшити</button>
        <button class="js-increase" id="increase">Збільшити</button>
    </div>
</div>

(.css)
.box {
  width: 50px;
  height: 50px;
  border: 2px dashed red;
  margin: 10px;
}

******   РІШЕННЯ   ******
(.js)
const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');

/ Початкові розміри /
let boxWidth = box.offsetWidth;
let boxHeight = box.offsetHeight;

/ Обмеження /
const MIN_SIZE = 20;
const MAX_SIZE = 300;

/ Зменшення /
decreaseBtn.addEventListener('click', () => {
  if (boxWidth > MIN_SIZE && boxHeight > MIN_SIZE) {
    boxWidth -= 20;
    boxHeight -= 20;
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
  }
});

/ Збільшення /
increaseBtn.addEventListener('click', () => {
  if (boxWidth < MAX_SIZE && boxHeight < MAX_SIZE) {
    boxWidth += 20;
    boxHeight += 20;
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
  }
});

*/
