const ALPHABET_LENGTH = 26;;

export const isPangram = (str) => {
  if (str.length < ALPHABET_LENGTH) {
    return false;
  }

  const uniqueLCaseLetters = [...new Set(str.toLowerCase().match(/[a-z]/g))];

  return uniqueLCaseLetters.length === ALPHABET_LENGTH;
};
