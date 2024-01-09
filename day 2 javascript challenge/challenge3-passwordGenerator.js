/* 
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
1. Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
2. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
3. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
4. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
5. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "i") {
      result += "j";
    } else if (str[i] === "u") {
      result += "v";
    } else if (str[i] === "e") {
      result += "f";
    } else if (str[i] === "o") {
      result += "p";
    } else if (str[i] === "A") {
      result += "B";
    } else if (str[i] === "I") {
      result += "J";
    } else if (str[i] === "U") {
      result += "V";
    } else if (str[i] === "E") {
      result += "F";
    } else if (str[i] === "O") {
      result += "P";
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  let strRes = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      strRes += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      strRes += str[i].toUpperCase();
    }
  }
  return strRes;
}

function removeSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    result += str[i];
  }
  return result;
}

function passwordGenerator(name) {
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
