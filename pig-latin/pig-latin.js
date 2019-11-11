export class translator {
  static translate(phrase) {
    return phrase.split(' ').map(this._translateWord).join(' ');
  }

  static _translateWord(word) {
    if (word[0].match(/[aeiou]/) || /^xr/.test(word) || /^yt/.test(word)) {
      return word + 'ay';
    }

    if (word.length === 2 && word[1] === 'y') {
      return word[1] + word[0] + 'ay';
    }

    if (/^[^aeiou]+y/.test(word)) {
      const yPosition = word.indexOf('y');

      return word.slice(yPosition) + word.slice(0, yPosition) + 'ay';
    }

    if (/^[^aeiou]{1}qu/.test(word) || /^thr/.test(word) || /^sch/.test(word)) {
      return word.slice(3) + word.slice(0,3) + 'ay';
    }

    if (/^ch/.test(word) || /^qu/.test(word) || /^th/.test(word)) {
      return word.slice(2) + word.slice(0,2) + 'ay';
    }

    if (word[0].match(/[^aeiou]/)) {
      return word.slice(1) + word[0] + 'ay';
    }
  }
}
