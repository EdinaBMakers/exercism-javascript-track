const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = colors => {
  const [firstColor, secondColor] = colors;
  return colorCode(firstColor) * 10 + colorCode(secondColor);
};

const colorCode = color => COLORS.indexOf(color);
