export const toRoman = (num) => {
  const ROMAN_NUMERALS =  {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX", 
    5: "V",
    4: "IV",
    1: "I"
  }

  let number = num;
  let romanNumerals = "";

  for (let num of Object.keys(ROMAN_NUMERALS).reverse().map(n => Number(n))) {

    let occurrence = Math.floor(number / num)

    if (occurrence < 1) {
      continue;
    }

    for (let i = 0; i < occurrence; i++) {
      romanNumerals += ROMAN_NUMERALS[num]
    }
    number = number % num;
  }

  return romanNumerals;
};
