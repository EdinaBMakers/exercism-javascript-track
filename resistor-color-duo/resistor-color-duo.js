const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = colors => {
  const colorsResistorValues = colors.slice(0,2).map(colorCode);
  return colorsResistorValues[0] * 10 + colorsResistorValues[1];
};

const colorCode = color => COLORS.indexOf(color);
