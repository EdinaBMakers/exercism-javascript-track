export const isIsogram = (str) => {
  if (str === '') {
    return true;
  }

  const letters = str.toLowerCase().match(/\w/g)
  const uniqueLetters = [...new Set(letters)];

  return letters.length === uniqueLetters.length;
};
