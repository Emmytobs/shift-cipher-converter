function rot13(str) {
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const strArr = str.split(" ");

const indicesOfStrings = [];
const ROT13_STRING_ARR = [];


// Get index of each character 
for (let i=0; i<strArr.length; i++) {
  const characterArr = strArr[i].split("")
  characterArr.forEach(character => {
    const index = alphabets.findIndex(alphabet => alphabet == character.toLocaleUpperCase())
    indicesOfStrings.push(index)
  })
}

console.log(indicesOfStrings)

// Get ROT13 index of character
for(let i=0; i<indicesOfStrings.length; i++) {
  const ROT13_STRING_INDEX = indicesOfStrings[i] + 13;
  // let ROT13_STRING = '';

  if (ROT13_STRING_INDEX > 25) {
    const lastIndexOfAlphabet = alphabets.length - 1;
    const indexDifference = lastIndexOfAlphabet - (indicesOfStrings[i] - 1) // 25 -11 = 14
    console.log(indexDifference)
    const indexOfGivenStr = 13 - indexDifference; // 13 - 14 *error*
    ROT13_STRING_ARR.push(alphabets[indexOfGivenStr])
  } else if (ROT13_STRING_INDEX == 25) {
    // Since ROT13_STRING_INDEX is 25, the resulting letter is "Z"
    ROT13_STRING_ARR.push(alphabets[ROT13_STRING_INDEX])
  } 
  else {
    ROT13_STRING_ARR.push(alphabets[ROT13_STRING_INDEX])
  }
}
console.log(ROT13_STRING_ARR)
console.log(ROT13_STRING_ARR.join(" "))
// const ROT13_STRING = ROT13_STRING_ARR.reduce((prev, count) => prev + count)
// console.log(ROT13_STRING)
}
rot13("serr cvmmn")

// const ROT13_CIPHER = index + 13;

// let ROT13_STRING = '';

// if (ROT13_CIPHER >= 25) {
//   const lastIndexOfAlphabet = alphabets.length - 1;
//   const indexDifference = lastIndexOfAlphabet - index
//   const indexOfGivenStr = 13 - indexDifference;
//   console.log(indexOfGivenStr)
// } else {
//   console.log(ROT13_CIPHER)
// }

// rot13("serr pbqb")