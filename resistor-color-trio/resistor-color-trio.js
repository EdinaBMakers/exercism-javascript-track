const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }

  get label() {
    this._validate()

    return `Resistor value: ${this._valueWithUnit()}`;
  }

  _validate() {
    this.colors.forEach(color => {
      if (!COLORS.includes(color)) {
        throw 'invalid color';
      }
    });
  }

  _valueWithUnit() {
    const [firstColor, secondColor, thirdColor] = this.colors; 

    const colorsValue = (this._colorCode(firstColor) * 10
                      + this._colorCode(secondColor))
                      * 10 ** this._colorCode(thirdColor);
    const unit = this._unit(colorsValue);

    return `${unit === 'kiloohms' 
            ? colorsValue / 1000 
            : colorsValue} ${unit}`
  }

  _unit(colorsValue) {
    return colorsValue / 1000 >= 1 ? 'kiloohms' : 'ohms'
  }

  _colorCode(color) {
    return COLORS.indexOf(color);
  }
}
