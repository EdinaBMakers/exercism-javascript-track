export class Words {
  count(phrase) {
    let occurrenceOfWords = {};

    phrase.toLowerCase().trim().split(/\s+/).forEach(item => {
      if (!Object.keys(occurrenceOfWords).includes(item)) {
        occurrenceOfWords[item] = 0;
      }

      occurrenceOfWords[item]++;
    });

    return occurrenceOfWords;
  }
}
