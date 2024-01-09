/* 
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  let strListHero = "";
  const arrListHero = [];
  const meleeList = [];
  const rangedList = [];
  const result = [];

  if (str.length === 0) {
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "," || str[i + 1] === undefined) {
      arrListHero.push(strListHero);
      strListHero = "";
    } else {
      strListHero += str[i];
    }
  }

  let tempName = "";
  for (let i = 0; i < arrListHero.length; i++) {
    for (let j = 0; j < arrListHero[i].length; j++) {
      if (arrListHero[i][j] !== "-") {
        tempName += arrListHero[i][j];
      }
      if (arrListHero[i][j + 1] === "M") {
        meleeList.push(tempName);
        tempName = "";
        break;
      } else if (arrListHero[i][j + 1] === "R") {
        rangedList.push(tempName);
        tempName = "";
        break;
      }
    }
  }
  result.push(rangedList, meleeList);

  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
