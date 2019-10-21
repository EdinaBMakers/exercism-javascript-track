export const primeFactors = (num) => {
  let primeFactors = [];
  let divisor = 2;

  while (num > 1) {
    if (num % divisor !== 0) {
      divisor++;
      continue;
    }
      
    primeFactors.push(divisor);
    num /= divisor;
  }

  return primeFactors;
};
