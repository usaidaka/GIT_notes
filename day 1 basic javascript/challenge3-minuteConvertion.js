function konversiMenit(menit) {
  const minute = Math.floor(menit / 60);
  const second = menit % 60;
  const formatSec = String(second).length === 1 ? `0${second}` : second;
  return `${minute}:${formatSec}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
