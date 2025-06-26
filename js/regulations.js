// ! ===========================================================================================
/*

Функція getSlice(array, value) приймає два параметра:

array - масив довільних елементів
value - значення елемента масиву для пошуку
Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

порожній масив, якщо в array немає елемента зі значенням value
підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
Оголошена функція getSlice(array, value)
Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []*/

/*function getSlice(array, value) {
  const includesValue = array.includes(value);
  const indexValue = array.indexOf(value);

  if (includesValue) {
    return array.slice(0, indexValue + 1);
  } else {
    return [];
  }
}

console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

function getSlice(array, value) {
  const index = array.indexOf(value);

  if (index === -1) {
    return [];
  } else {
    return array.slice(0, index + 1);
  }
}

console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ["Mango", "Poly"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // ["Mango"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // []

*/

// ! ===========================================================================================
/*

Функція checkStorage(storage, item) приймає два параметри:

storage - масив рядків, що описує доступні товари на складі
item - рядок з назвою товара, наявність якого потрібно перевірити
Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

Оголошена функція checkStorage(storage, item)
Виклик checkStorage(["apple", "plum", "pear"], "plum") повертає "plum is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
Виклик checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"

function checkStorage(storage, item) {
  const itemLoverCase = item.toLowerCase();
  const availabilityOfGoods = storage.includes(itemLoverCase);

  if (availabilityOfGoods) {
    return `${itemLoverCase} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

function checkStorage(storage, item) {
  const lowerCaseItem = item.toLowerCase();

  for (let i = 0; i < storage.length; i++) {
    if (storage[i].toLowerCase() === lowerCaseItem) {
      return `${lowerCaseItem} is available to order!`;
    }
  }

  return 'Sorry! We are out of stock!';
}
  
  console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

*/
