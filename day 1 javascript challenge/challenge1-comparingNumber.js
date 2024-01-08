/* Cara 1 menggunakan IF Logic */
function bandingkanAngka(angka1, angka2) {
  let result = "";
  if (angka1 === angka2) {
    result = -1;
  } else if (angka1 < angka2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/* Cara 2 menggunakan ternary operator */
function bandingkanAngka(angka1, angka2) {
  return angka1 === angka2 ? -1 : angka1 < angka2 ? true : false;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
