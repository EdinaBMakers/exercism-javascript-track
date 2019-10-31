export class Series {
  constructor(digitsSrt) {
    this.digitsSrt = digitsSrt;
  }

  get digits() {
    return this.digitsSrt.split('').map(Number);
  }

  slices(sliceLength) {
    if (sliceLength > this.digitsSrt.length) {
      throw 'Slice size is too big.';
    }

    const slices = [];
    const digits = this.digits;
    
    for (let i = 0; i <= this.digitsSrt.length - sliceLength; i++) {
      slices.push(digits.slice(i, i + sliceLength))
    }

    return slices;
  }
}
