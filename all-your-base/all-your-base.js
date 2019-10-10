export const convert = (digits, sourceBase, targetBase) => {
  if (sourceBase === undefined
      || !Number.isInteger(sourceBase)
      || sourceBase <= 1) {
    throw new Error('Wrong input base');
  }

  if (targetBase === undefined
      || !Number.isInteger(targetBase)
      || targetBase <= 1) {
    throw new Error('Wrong output base');
  }
  
  if (digits.length === 0 
      || digits.length > 1 && digits[0] === 0
      || digits.some(digit => digit < 0 || digit >= sourceBase)) {
    throw new Error('Input has wrong format');
  }

  if (digits.length === 1 && digits[0] === 0) {
    return [0];
  }
  
  if (sourceBase === 10) {
    return fromDecimal(digits, targetBase);
  }

  const decimalDigits = toDecimal(digits, sourceBase);

  if (targetBase === 10) {
    return decimalDigits;
  }

  return fromDecimal(decimalDigits, targetBase);
};

function toDecimal(digits, base) {
  return digits
          .reverse()
          .map((digit, index) => digit * base ** index)
          .reduce((acc, curr) => acc + curr)
          .toString()
          .split('')
          .map(Number);
};

function fromDecimal(digits, base) {
  let decimal = Number(digits.join(''));
  let convertedDigits = [];

  while (decimal > 0) {
    convertedDigits.unshift(decimal % base);
    decimal = Math.floor(decimal / base);
  }

  return convertedDigits;
};
