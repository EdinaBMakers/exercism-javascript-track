export class Luhn {
  constructor(numberStr) {
    this.numberSrt = numberStr;
  }

  get valid() {
    const numberStrWithoutSpace = this.numberSrt.replace( /\s/g, '');

    if (numberStrWithoutSpace.length < 2) {
      return false;
    }

    if (numberStrWithoutSpace.match(/\D/)) {
      return false;
    }

    const modifiedDigits = numberStrWithoutSpace.split('').reverse().map((digit, index) => {
      if (index % 2 === 0) {
        return Number(digit);
      }

      let doubledDigit = digit * 2;

      return doubledDigit > 9
              ? doubledDigit - 9
              : doubledDigit;
    });

    return modifiedDigits.reduce((acc, curr) => acc + curr) % 10 === 0;
  }
}
