export const transform = (oldFormat) => {
  let newFormat = {};

  for (let score in oldFormat) {
    oldFormat[score].forEach(letter => newFormat[letter.toLowerCase()] = Number(score));
  }

  return newFormat;
};
