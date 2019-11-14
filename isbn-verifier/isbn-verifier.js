export class ISBN {
  constructor(isbnStr) {
    this.isbnStr = isbnStr;
  }

  isValid() {
    if (!/^\d\-?\d{3}\-?\d{5}\-?[\dX]$/.test(this.isbnStr)) {
      return false;
    }

    let isbn = this.isbnStr.match(/[\dX]/g).map(char => {
      return char === 'X' ? 10 : Number(char);
    });

    return isbn.map((number, index) => number * (10 - index))
               .reduce((acc, curr) => acc + curr)
               % 11 === 0;
  }
}
