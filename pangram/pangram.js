const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const isPangram = (str) => {
  if (str.length < ALPHABET.length) {
    return false;
  }

  const lowercaseStr = str.toLowerCase();

  for (let letter of ALPHABET) {
    if (!lowercaseStr.includes(letter)) {
      return false;
    }
  }

  return true;
};
