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
  // object
  const vocal = {
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P",
  };

  for (let i = 0; i < str.length; i++) {
    if (vocal[str[i]]) {
      result += vocal[str[i]];
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
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
