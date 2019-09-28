const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = colors =>
  +colors.slice(0,2).map(color => colorCode(color)).join('');

const colorCode = color => COLORS.indexOf(color);
