console.log("Hello world!");
let n = 1; //число
let str = "Hello"; //строка
let checked = true; // бул
let age = null;
let x; // вывод "undefined"
let user = { name: "Kate" }; // объект
let s = Symbol("a"); // символ id с именем i
const bigInt = 123n;
console.log(
  n +
    "\n" +
    str +
    "\n" +
    checked +
    "\n" +
    age +
    "\n" +
    x +
    "\n" +
    user.name +
    "\n" +
    s.toString() +
    "\n" +
    bigInt +
    "\n"
);
console.log(typeof n);
console.log(typeof str);
console.log(typeof checked);
console.log(typeof age);
console.log(typeof x);
console.log(typeof user.name);
console.log(typeof s);
console.log(typeof bigInt + "\n");
// Попробовать изменить переменную с типом object объявленную через const
const a = { b: 1 };
a.b = 2;
console.log(a.b);
//Попробовать изменить переменную с типом object объявленную через let
let usr = { name: "Kate" };
usr.name = "Ekaterina";
console.log(usr.name);
//Попробовать изменить переменную с типом object объявленную через var
var usrr = { name: "Kate" };
usrr.name = "Ekaterina";
console.log(usrr.name);
