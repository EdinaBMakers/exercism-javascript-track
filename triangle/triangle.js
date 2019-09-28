export class Triangle {
  constructor(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c
  }

  kind() {
    const sides = [this.a, this.b, this.c];
    const sortedSides = sides.sort((a, b) => a - b);

    if (sortedSides[0] <= 0 
        || sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      throw new Error();
    }

    const uniqueSidesCount = new Set(sides).size;

    switch (uniqueSidesCount) {
      case 1: 
        return 'equilateral';
      case 2:
        return 'isosceles';
      default:
        return 'scalene';
    }
  }
}
