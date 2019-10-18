export class NucleotideCounts {
  static parse(strand) {
    const NUCLEOTIDES = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0,
    };

    if (strand.match(/[^ACGT]/g)) {
      throw 'Invalid nucleotide in strand';
    }

    [...strand].forEach(nucleotide => NUCLEOTIDES[nucleotide]++);

    return Object.values(NUCLEOTIDES).join(' ');
  }
}
