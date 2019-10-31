export class Anagram {
  constructor(word) {
    this.lowerCaseWord = word.toLowerCase();
  }

  matches(candidates) {
    return candidates.filter(candidate => {
      let lowerCaseCandidate = candidate.toLowerCase();

      return (lowerCaseCandidate !== this.lowerCaseWord
             && lowerCaseCandidate.split('').sort().join('') === this.lowerCaseWord.split('').sort().join(''));
    });
  }
}
