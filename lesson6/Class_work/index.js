// const isUserAuth = false;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }

// checkAccess();

// function writeMessage() {
//   function checkAccess() {
//     if (isUserAuth) {
//       console.log("Привет польз");
//     } else {
//       console.log("Привет гость");
//     }
//   }

//   writeMessage();
// }

// function sum(a, b = 0) {
//   console.log(a + b);
// }
// sum(1, 4);
// sum(16);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }

// const userName = getName("Kate");
// console.log(userName);

// function getName(userName) {
//   return userName;
// }

// const nameUserOne = getName(name);
// console.log(nameUserOne);

// var name = "Kate";
// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// const userName = false;
// function checkName() {
//   if (userName) {
//     console.log("Привет, пользователь");
//   } else {
//     console.log("Привет, гость");
//   }
// }

// checkName();

// function exp(a, b = 2) {
//   console.log(a ** b);
// }
// exp(2);

// function getValue(arr) {
//   let s = 0;

//   for (i = 0; i < arr.length; i++) {
//     s += arr[i];
//   }
//   return s / arr.length;
// }

// console.log(getValue([1, 32, 5, 8, 15]));
let weekArray = ["пн", "вт", "ср", "чт", "пт", "суббота", "восресенье"];
for (let i = 0; i < weekArray.length; i++) {
  if (weekArray[i] == "суббота" || weekArray[i] == "воскресенье") {
    console.log(weekArray[i].bold());
  } else {
    console.log(weekArray[i]);
  }
}

for (let i = 0; i < weekArray.length; i++) {
  let day = weekArray[5];
  if (weekArray[i] == day) {
    console.log(weekArray[i].italics());
  } else {
    console.log(weekArray[i]);
  }
}
