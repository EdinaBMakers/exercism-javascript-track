const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }

  get label() {
    return `Resistor value: ${this._valueWithUnit()}`;
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
