const BRACKET_PAIRS = {
  ")": "(", 
  "}": "{",
  "]": "["
};

export const matchingBrackets = (brackets) => {
  if (brackets.length % 2 != 0) { return false; }

  const openingBrackets = Object.values(BRACKET_PAIRS);
  const bracketsArr = brackets.split('');
  let bracketsToClose = [];

  for (let bracket of bracketsArr) {
    if (openingBrackets.includes(bracket)) {
      bracketsToClose.push(bracket);
    } else if (bracketsToClose.length === 0 || bracketsToClose.pop() != BRACKET_PAIRS[bracket]) {
      return false;
    }
  }

  return bracketsToClose.length === 0;
};

