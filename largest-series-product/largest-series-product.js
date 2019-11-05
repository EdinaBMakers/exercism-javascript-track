export const largestProduct = (digitsStr, seriesLength) => {
  if (seriesLength === 0) { return 1; }

  if (seriesLength > digitsStr.length) { 
    throw 'Slice size is too big.'; 
  }

  if (seriesLength < 0
      || digitsStr.match(/\D/g) != null) {
    throw 'Invalid input.';
  }

  let digits = digitsStr.split('').map(Number);
  let largestProduct = 0;

  for (let i = 0; i <= digits.length - seriesLength; i++) {
    let candidate = digits.slice(i, i + seriesLength)
                          .reduce((acc, curr) => acc * curr);

    if (candidate > largestProduct) {largestProduct = candidate;}
  }

  return largestProduct;
};
