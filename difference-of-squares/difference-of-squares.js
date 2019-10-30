export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let currentNum = 1;
    let squareOfNumbers = 0;

    while (currentNum <= this.number) {
      squareOfNumbers += currentNum ** 2;
      currentNum++;
    }

    return squareOfNumbers;
  }

  get squareOfSum() {
    let currentNum = 1;
    let sumOfNumbers = 0;

    while (currentNum <= this.number) {
      sumOfNumbers += currentNum;
      currentNum++;
    }

    return sumOfNumbers ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
