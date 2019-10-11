const NUC_COMPLEMENTS =  {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

export const toRna = (dna) => {
  return dna.split('')
            .map(nucleotid => NUC_COMPLEMENTS[nucleotid])
            .join('');
};
