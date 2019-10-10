export const encode = (strToEncode) => {
  let previousChar = '';
  let occurenceCounter = 0;
  let encodedStr = '';

  [...strToEncode].forEach(char => {
    if (char != previousChar) {
      encodedStr += (occurenceCounter === 0  || occurenceCounter === 1
        ? previousChar 
        : occurenceCounter + previousChar);

      previousChar = char;
      occurenceCounter = 0;
    }

    occurenceCounter++;
  })

  return encodedStr + (occurenceCounter === 0  || occurenceCounter === 1
  ? previousChar 
  : occurenceCounter + previousChar);
};

export const decode = (strToDecode) => {
  if (strToDecode === '') {
    return '';
  }

  const lettersWithOccuranceArr = strToDecode.match(/(\d*)(\D)/g);
  let decodedStr = '';

  for (let item of lettersWithOccuranceArr) {
    if (item.length === 1) {
      decodedStr += item;
      continue;
    }
    let tempStr = '';
    let occurance = Number(item.match(/\d*/));
    let letter = item[item.length -1];

    for (let i = 0; i < occurance; i++) {
      tempStr += letter;
    }

    decodedStr += tempStr;
  }

  return decodedStr;
};
