export class Triplet {
  constructor(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  static where({minFactor = 0, maxFactor = 0, sum = 0}) {
    const triplets = []
    let tempTriplet;

    for(let a = minFactor; a < maxFactor; a++){
      for(let b = a+1; b < maxFactor; b++){
        for(let c = b+1; c <= maxFactor; c++){
          tempTriplet = new Triplet(a, b, c)
          if (tempTriplet.isPythagorean()) {
            triplets.push(tempTriplet)
          }
        }
      }
    }
    if (sum > 0) return triplets.filter(triplet => triplet.sum() === sum)
    
    return triplets
  }
}
