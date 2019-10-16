const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = (str) => {
  if (str.length < ALPHABET.length) {
    return false;
  }

  const uniqueLCaseLetters = [...new Set(str.toLowerCase().match(/[a-z]/g))];

  return uniqueLCaseLetters.length === ALPHABET.length;
};
