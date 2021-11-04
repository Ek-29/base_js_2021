//1
var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

var vegetableLength = vegetables.map(function (piece) {
  return piece.length;
});

console.log(vegetableLength);
//2
var numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(numbers) {
  var result = [];
  numbers.reduce(function (sum, current, i) {
    return (result[i] = sum + current);
  }, 0);
  console.log(result);
}
currentSums(numbers);
//3
var numbers = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(numbers) {
  var obj = {};
  var result = [];

  for (var i = 0; i < numbers.length; i++) {
    var elem = numbers[i];

    for (var j = i + 1; j < numbers.length; j++) {
      var item = numbers[j];

      if (elem + item != 7) continue;

      var num = elem + ":" + item;
      obj[num] = num;
    }
  }

  for (var key in obj) {
    result.push(obj[key]);
  }

  return result;
}

console.log(sumSeven(numbers));
//4
var str = "Каждый охотник желает знать, где сидит фазан.";

function firstChar(value, index, arr) {
  if (index == 0) return true;
  else return arr[index - 1] === " ";
}

var array = [].filter.call(str, firstChar);

console.log(array);
//5
var str = "JavaScript";

function getChars(value, index, str) {
  return str.substring(index - 1, index + 2);
}

var arr = Array.prototype.map.call(str, getChars);

console.log(arr);
//6
var numerics = [5, 7, 2, 9, 3, 1, 8];
function matching(first, second) {
  if (first == second) return 0;
  if (first > second) return -1;
  else return 1;
}
numerics = numerics.sort(matching);
console.log(numerics);
//7
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];
function getArr(a, b, c) {
  var d = a.concat(b, c);
  var f = d.pop();
  while (f != undefined) {
    console.log(f + " ");
    f = d.pop();
  }
}

getArr(a, b, c);
//8
var arr = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);

//9
var arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
var sum = 0;
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    for (k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);

//10

function arr(a) {
  var b = [];
  for (var i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  return b;
}
console.log(arr[(1, 5, 6, 7)]);

//11

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum > 10) {
    break;
  }
}
console.log(i + 1);

//12
var arr = [];
var data;
var kil;
function arrayFill(data, kil) {
  for (var i = 0; i < kil; i++) {
    arr[i] = data;
    console.log(arr[i]);
  }
}
arrayFill("x", 10);
