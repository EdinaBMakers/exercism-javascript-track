const ORBITAL_PERIODS = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune':164.79132
}

export const age = (planet, age) => {
  let ageOnEarth = age / 31557600;

  return planet === 'earth' 
          ? Number (ageOnEarth.toFixed(2)) 
          : Number ((ageOnEarth / ORBITAL_PERIODS[planet]).toFixed(2));
};
