export const translate = (rna) => {
  if (rna === undefined) {
    return [];
  }

  const AMINOACIDS = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine", 
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP" 
  };
  let proteins = [];
  let codons = rna.match(/.{1,3}/g);
  
  for (let codon of codons) {
    if (!Object.keys(AMINOACIDS).includes(codon)) {
      throw new Error('Invalid codon')
    }

    let protein = AMINOACIDS[codon];

    if (protein === 'STOP') {
      break;
    }
    
    proteins.push(protein);
  }

  return proteins;
};
