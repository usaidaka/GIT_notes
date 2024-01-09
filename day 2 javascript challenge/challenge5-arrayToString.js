/* 
Diberikan function stringToArray yang menerima 1 parameter berupa string, 
implementasikan stringToArray agar dapat menghasilkan multidimensional array seperti yang diminta.
*/

function stringToArray(string) {
  let temp = [];
  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ",") {
      temp.push(string[i]);
      if (string[i + 1] === undefined) {
        result.push(temp);
        temp = [];
      }
    } else {
      result.push(temp);
      temp = [];
    }
  }

  return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
