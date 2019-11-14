const DAYS_AND_PRESENTS = {
  first : "a Partridge in a Pear Tree",
  second: "two Turtle Doves",
  third: "three French Hens",
  fourth: "four Calling Birds",
  fifth: "five Gold Rings",
  sixth: "six Geese-a-Laying",
  seventh: "seven Swans-a-Swimming",
  eighth: "eight Maids-a-Milking",
  ninth: "nine Ladies Dancing",
  tenth: "ten Lords-a-Leaping",
  eleventh: "eleven Pipers Piping",
  twelfth: "twelve Drummers Drumming"
};

const DAYS = Object.keys(DAYS_AND_PRESENTS);
const PRESENTS = Object.values(DAYS_AND_PRESENTS);

export const recite = (startDay, endDay) => {
  if (endDay === undefined) {
    return verse(startDay);
  }

  let lines = '';

  while (startDay < endDay) {
    lines += `${verse(startDay)}\n`;
    startDay++;
  }

  return lines + verse(endDay);
};

function verse(day) {
    return `On the ${DAYS[day - 1]} day of Christmas my true love gave to me: ${presentsList(day)}.\n`;
}

function presentsList(day) {
  return day > 1
          ? `${PRESENTS.slice(1, day).reverse().join(', ')}, and ${PRESENTS[0]}`
          : PRESENTS[0];
}
