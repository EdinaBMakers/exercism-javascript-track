export class Anagram {
  constructor(word) {
    this.lowerCaseWord = word.toLowerCase();
  }

  matches(candidates) {
    return candidates.filter(candidate => {
      let lowerCaseCandidate = candidate.toLowerCase();

      return (lowerCaseCandidate !== this.lowerCaseWord
             && this.alphabetize(lowerCaseCandidate) === this.alphabetize(this.lowerCaseWord));
    });
  }

  alphabetize(word) {
    return word.split('').sort().join('');
  }
}
