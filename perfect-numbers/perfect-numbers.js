export const classify = (number) => {
  validate(number);

  const factors = getFactors(number);
  const sumOfFactors = factors.reduce((acc, curr) => acc + curr, 0);

  if (isPerfect(number, sumOfFactors)) {
    return 'perfect';
  }
  if (isAbundant(number, sumOfFactors)) {
    return 'abundant';
  }
  if (isDeficient(number, sumOfFactors)) {
    return 'deficient';
  }
};

function validate(number) {
  if (number <= 0) {
    throw 'Classification is only possible for natural numbers.';
  }
}

function getFactors(number) {
  let factors = [];

  for (let n = 1; n <= number / 2; n++) {
    if (number % n === 0) {
      factors.push(n);
    }
  }

  return factors;
}

function isPerfect(number, sumOfFactors) {
  return sumOfFactors === number
}

function isAbundant(number, sumOfFactors) {
  return sumOfFactors > number;
}

function isDeficient(number, sumOfFactors) {
  return sumOfFactors < number
}
