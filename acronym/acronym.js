export const parse = (phrase) => {
  return phrase.match(/[A-Za-z']+/g)
               .map(word => word[0].toUpperCase())
               .join('');
};
