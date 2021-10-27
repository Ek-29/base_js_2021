// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;
// console.log(num1, num2);

// const obj1 = {
//   name: "Kate",
// };
// const obj2 = obj1;
// console.log(obj1, obj2);

// obj1.name = "Ivan";

// console.log(obj1, obj2);

// const obj = {};
// console.log(obj);
// obj.age = "12";
// obj["name-user"] = "Kate";

// console.log(obj);
// console.log(obj.age, obj["name-user"]);
// obj.age = "18";
// obj["name-user"] = "Elena";
// console.log(obj);

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi, USER -", name);
//   },
// };

// obj.sayHi("Kate");

// const myFAvFilm = {
//   date: "12/12/05",
//   director: "Mike Wasovsky",
//   country: "USA",
//   money: "44455522621$",
//   getName: function (name) {
//     console.log(name);
//     myFAvFilm.getName("Дневник памяти");
//   },
// };

// delete myFAvFilm.date;
// console.log(myFAvFilm);

console.log(parseInt("200px"));
console.log(parseFloat("0.2px"));
console.log(isNaN(NaN));
console.log(isNaN("sads"));
console.log(isFinite("15"));
let num = 255;
console.log(num.toString()); // "255"
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
let num2 = 12.2;
console.log(Math.round(12.2));
console.log(Math.floor(12.2));
console.log(Math.ceil(12.2));
console.log(num2.toFixed(3));
console.log(Math.random());
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));
let num3 = 0.1 + 0.2;
console.log(num3);
console.log(+num3.toFixed(2));
