export const validate = (number) => {
  let digits = String(number).split('').map(Number);

  if (digits.length === 1) {
    return true;
  }

  if (digits.length === 2) {
    return false;
  }

  const poweredDigits = digits.map((digit => Math.pow(digit, digits.length)));
  const sumOfPoweredDigits = poweredDigits
    .reduce((accumulator, poweredDigit) => accumulator + poweredDigit, 0)

  return number === sumOfPoweredDigits;
};
