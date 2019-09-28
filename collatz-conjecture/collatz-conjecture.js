export const steps = (number) => {
  if (number < 1) {
    throw new Error('Only positive numbers are allowed');
  }

  let stepsCounter = 0;

  while (number > 1) {
    number = (number % 2 == 0 ? number / 2 : number * 3 + 1);
    stepsCounter++;
  }

  return stepsCounter;
};
