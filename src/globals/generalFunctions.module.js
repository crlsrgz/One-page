export const searchLongestWord = (array) => {
  const arrayLength = array.length;
  let indexOfLongestWord = -1;
  let wordLength = -1;
  for (let i = 0; i < arrayLength; i++) {
    if (array[i].length > wordLength) {
      wordLength = array[i].length;
      indexOfLongestWord = i;
    }
  }
  return array[indexOfLongestWord];
};
