// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function kv(num) {
  return num * num;
}
console.log(kv(4, 4));
// Cделайте функцию, которая возвращает сумму двух чисел.

function sum(a, b) {
  return a + b;
}
console.log(sum(4, 4));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function func_3(a, b, c) {
  return (a - b) / c;
}
console.log(func_3(23, 2, 7));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
let Num = function (num) {
  switch (num) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";

    case 3:
      return "Среда";

    case 4:
      return "Четверг";

    case 5:
      return "Пятница";

    case 6:
      return "Суббота";

    case 7:
      return "Воскресенье";
    default:
      return "Введите число от 1 до 7";
  }
};
console.log(Num(5));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function func_5(a, b) {
  if (a == b) return true;
  else return false;
}
console.log(func_5(4, 4));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.

function func_6(a, b) {
  if (a + b > 10) return true;
  else return false;
}
console.log(func_6(4, 4));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function func_6(a) {
  if (a < 0) return true;
  else return false;
}
console.log(func_6(-5));

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(a) {
  if (a > 0 && a < 10) return true;
  else return false;
}
console.log(isNumberInRange(5));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let arr = [5, 7, -5, 74, 4, -2, -9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (isNumberInRange(arr[i])) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num) {
  let sum = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}
console.log(getDigitsSum(465));

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

let arr_11 = [];
for (let i = 1; i < 2020; i++) {
  if (getDigitsSum(i) == 13) {
    arr_11.push(i);
  }
}
console.log(arr_11);

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(num) {
  return num % 2 == 0;
}

console.log(isEven(5));
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let arr_13 = [9, 4, 6, 2, 7];
let newArr_13 = [];
for (let i = 1; i < arr_13.length; i++) {
  if (isEven(arr_13[i])) {
    newArr_13.push(arr_13[i]);
  }
}
console.log(newArr_13);

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
  let arr_14 = [];
  for (let i = 1; i < arr_14.length; i++) {
    if (num % i == 0) {
      arr_14.push(i);
    }
    return arr_14;
  }

  console.log(getDivisors(24));
}
//Дан массив с числами. Выведите последовательно его элементы.

let arr_15 = [1, 2, 5];
for (let i = 1; i < arr_15.length; i++) {}
console.log(arr_15[0], arr_15[1], arr_15[2]);

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
let num = 1256;

function sum(num) {
  let arr = String(num);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }

  if (result > 9) {
    num = result;
    sum(num);
  } else {
    console.log(result);
  }
}

sum(num);
