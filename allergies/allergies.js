const ALLERGENS = ['eggs', 
                   'peanuts',
                   'shellfish',
                   'strawberries',
                   'tomatoes',
                   'chocolate',
                   'pollen',
                   'cats'
                  ];

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    let allergenFlags = this._scoreToAllergenFlags();
    let allergens = []
    let allergenIndex = 0;

    while (allergenIndex < allergenFlags.length
           && allergenIndex < ALLERGENS.length) {
      if (allergenFlags[allergenIndex] === 1) {
        allergens.push(ALLERGENS[allergenIndex]);
      }
      allergenIndex++;
    }

    return allergens;
  }

  allergicTo(allergene) {
    return this.list().includes(allergene);
  }

  _scoreToAllergenFlags() {
    let allergenFlags = [];

    while (this.score > 0) {
      allergenFlags.push(this.score % 2);
      this.score = Math.floor(this.score / 2);
    }

    return allergenFlags;
  }
}