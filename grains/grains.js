import BigInt from './lib/big-integer';

export class Grains {
  square(position) {
    return BigInt(2).pow(position - 1).toString();
  }

  total() {
    return BigInt(2).pow(64).minus(1).toString();
  }
}
