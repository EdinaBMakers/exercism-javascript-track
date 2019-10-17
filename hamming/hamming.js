export const compute = (strandA, strandB) => {
  let hammingDistance = 0;

  if (strandA === '' && strandB === '') {
    return hammingDistance;
  }

  if (strandA === '') {
    throw new Error('left strand must not be empty');
  }

  if (strandB === '') {
    throw new Error('right strand must not be empty');
  }

  if (strandA.length !== strandB.length) {
    throw new Error('left and right strands must be of equal length');
  }

  for (let i = 0; i < strandA.length; i++) {
    if (strandA[i] !== strandB[i]) {
      hammingDistance++;
    }
  }

  return hammingDistance;
};
