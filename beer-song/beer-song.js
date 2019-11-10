export class BeerSong {
  static verse(numOfBeer) {
    return numOfBeer === 0
           ? `${this._numberOfBottles(numOfBeer)[0].toUpperCase() + this._numberOfBottles(numOfBeer).slice(1)} of beer on the wall, ${this._numberOfBottles(numOfBeer)} of beer.\n`
             + `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
           : `${this._numberOfBottles(numOfBeer)} of beer on the wall, ${this._numberOfBottles(numOfBeer)} of beer.\n`
             +`Take ${this._oneOrIt(numOfBeer)} down and pass it around, ${this._numberOfBottles(numOfBeer - 1)} of beer on the wall.\n`;
  }

  static sing(numOfBeerAtTheBeginning = 99, numOfBeerAtTheEnd = 0) {
    let songLines = ''

    for (let numOfBeer = numOfBeerAtTheBeginning; numOfBeer >= numOfBeerAtTheEnd; numOfBeer--) {
      songLines += `\n` + this.verse(numOfBeer);
    }

    return songLines.trimStart();
  }

  static _numberOfBottles(numOfBeer) {
    switch (numOfBeer) {
      case 0:
        return 'no more bottles';
      case 1:
        return '1 bottle';
      default:
        return `${numOfBeer} bottles`;
    }
  }

  static _oneOrIt(numOfBeer) {
    return numOfBeer > 1 ? 'one' : 'it';
  }
}
