// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str = "Каждый охотник желает знать";
function stringToarray(str) {
  return str.trim().split(" ");
}

var arr = stringToarray(str);
console.log(arr);

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

var str = "Каждый охотник желает знать";
function delete_characters(str, length) {
  if (str.constructor === String && length > 0) {
    return str.slice(0, length);
  }
}

console.log(delete_characters(str, 7));

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

var str = "HTML JavaScript PHP";

function insert_dash(str) {
  return str
    .trim()
    .toUpperCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, "-");
}

console.log(insert_dash(str));

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital";

function cursive_letter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(cursive_letter(str));

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

var str = "каждый охотник желает знать";

function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

console.log(capitalize(str));

// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
  var new_str = "";
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}

console.log(change_register(str));

// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str) {
  var res = "";
  res = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return res;
}

console.log(remove_char(str));

// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function zeros(num, len, sign) {
  let len_zer = len - (num + "").length, // к-во нулей
    num_zer = "";
  for (; len_zer > 0; len_zer--) {
    num_zer += 0;
  }

  return sign === undefined || sign === ""
    ? num_zer + num + ""
    : sign + num_zer + num + "";
}

console.log(zeros(145, 5, "-"));
console.log(zeros(33, 4, "+"));
console.log(zeros(33, 4));

// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
  var res = str1.toUpperCase() === str2.toUpperCase();

  return res;
}
console.log(comparison("string", "StRiNg")); //
console.log(comparison("ABCDe", "AbcdW"));

// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

function insensitive_search(str1, str2) {
  let search_str = new RegExp(str2, "ig");
  var result = str1.search(search_str);

  return result > 0 ? "Соответствует" : "Не соответствует";
}

console.log(insensitive_search("Изучаю JavaScript", "javascript"));
console.log(insensitive_search("Изучаю JavaScript", "javascriptS"));

// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo woRld";
function initCap(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, "");
  });
}

console.log(initCap(str));

// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

function initSnake(str) {
  var str = str.replace(/[A-Z]/g, function (letter) {
    return "_" + letter.toLowerCase();
  });

  return str.replace(/^_/, "");
}

console.log(initSnake("HelloWorld"));

// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

function repeatStr(str, n) {
  var new_str = "";
  while (n-- > 0) new_str += str;
  return new_str;
}

console.log(repeatStr("Hello!", 5));

// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

var pathname = "/home/user/dir/file.txt";

function path(pathname) {
  var name = pathname.split("/").pop();
  return name;
}

console.log(path(pathname));

// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
  if (substring.length > this.length) return false;
  return this.substr(this.length - substring.length) === substring;
};

console.log(str.endsWith(str1));
console.log(str.endsWith(str2));

// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

var str = "Астрономия — Наука о небесных телах";

function getSubstr(str, char, pos) {
  if (pos == "after") return str.slice(str.indexOf(char) + 1);
  else if (pos == "before") return str.slice(0, str.indexOf(char));
  else return str;
}

console.log(getSubstr(str, "—", "after"));
console.log(getSubstr(str, "Н", "before"));

// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos) {
  var array = str.split("");
  array.splice(pos, 0, substr);
  return array.join("");
}

console.log(insert("Казнить нельзя"));
console.log(insert("Казнить нельзя", "Помиловать "));
console.log(insert("Казнить нельзя", "Помиловать ", 8));

// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

function limitStr(str, n, symb) {
  if (!n && !symb) return str;
  symb = symb || "...";
  return str.substr(0, n - symb.length) + symb;
}

console.log(limitStr("Каждый охотник желает знать."));
console.log(limitStr("Каждый охотник желает знать.", 17));
console.log(limitStr("Каждый охотник желает знать.", 22, "!"));

// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

var symb = "о",
  str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
  for (
    var count = -1, index = 0;
    index != -1;
    count++, index = str.indexOf(symb, index + 1)
  );

  return count;
}

console.log(count(str, symb));

// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str = "    Max is a good      boy     ";

function strip(str) {
  str.replace(/\s+/g, " ").replace(/^\s/, "").replace(/\s$/, "");

  return str;
}

console.log(strip(str));

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

var str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
  return str.split(" ").splice(0, n).join(" ");
}

console.log(cutString(str, 5));

// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

var str = "abc def ghi jkl mno pqr stu";

function findWord(word, str) {
  return RegExp("\\b" + word + "\\b").test(str);
}

console.log(findWord("mno", str));
