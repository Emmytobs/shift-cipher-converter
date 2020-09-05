function rot13(str) {
    const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const characterArr = str.split("");

    const indicesOfStrings = []; // stores the indices of each string on the alphabets array
    const ROT13_STRING_ARR = []; // stores the ROT13 string for each character in the "str" parameter

    // Get the index of each character on the alphabets array 
    characterArr.forEach(character => {
        const index = alphabets.findIndex(alphabet => alphabet == character.toLocaleUpperCase())
        indicesOfStrings.push(index)
    })

    // Get ROT13 index of character and puts it in ROT13_STRING_ARR.
    for(let i=0; i<indicesOfStrings.length; i++) {
        // For any character in indicesOfString that is -1, 
        // it puts an empty string in ROT13_STRING_ARR and continues the loop.
        if(indicesOfStrings[i] == -1) {
            ROT13_STRING_ARR.push(" ")
            continue;
        }
        // Since the cipher string is 13 alphabets ahead, shift each index in the indicesOfStrings array by 13 letters
        const ROT13_STRING_INDEX = indicesOfStrings[i] + 13;

        // If the ROT13_STRING_INDEX is more than 25, 
        // we need to get the number of positions remaining, 
        // starting from the beginning of the alphabets array.
        if (ROT13_STRING_INDEX > 25) {
            // First, get the last index of the alphabet.
            // The last index of a 26-index-long array is 25: (26 -25)
            const lastIndexOfAlphabet = alphabets.length - 1; 

            // Get the distance between the lastIndex and the looped over index
            const indexDifference = lastIndexOfAlphabet - (indicesOfStrings[i] - 1) // 25 -11 = 14

            const indexOfGivenStr = 13 - indexDifference; // 13 - 14 *error*

            ROT13_STRING_ARR.push(alphabets[indexOfGivenStr])
        } 
        else if (ROT13_STRING_INDEX == 25) {
            // Since ROT13_STRING_INDEX is 25, the resulting letter is "Z",
            // because there will be exactly 13 character between the ROT13_STRING position 
            // and the actual letter in the alphabets array
            ROT13_STRING_ARR.push(alphabets[ROT13_STRING_INDEX])
        } 
        else {
            // Just use the ROT13_STRING_INDEX "as-is"
            ROT13_STRING_ARR.push(alphabets[ROT13_STRING_INDEX])
        }
    }
    return ROT13_STRING_ARR.join("") // the ROT13_STRING_ARR contains letters and spaces.
}

rot13("serr cvmmn")