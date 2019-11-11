export const proverb = (...words) => {
  let proverb = '';
  let qualifier;

  qualifier = typeof words[words.length - 1] === 'object' 
    ? words.pop()['qualifier'] + ' '
    : '';

  for (let i = 0; i < words.length - 1; i++) {
    proverb += `For want of a ${words[i]} the ${words[i + 1]} was lost.\n`
  }

  proverb += `And all for the want of a ${qualifier}${words[0]}.`

  return proverb;
};
