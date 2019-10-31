export class Series {
  constructor(digitsSrt) {
    this.digitsArr = [...digitsSrt].map(Number);
  }

  get digits() {
    return this.digitsArr;
  }

  slices(sliceLength) {
    if (sliceLength > this.digits.length) {
      throw 'Slice size is too big.';
    }

    const slices = [];

    for (let i = 0; i <= this.digits.length - sliceLength; i++) {
      slices.push(this.digits.slice(i, i + sliceLength))
    }

    return slices;
  }
}
