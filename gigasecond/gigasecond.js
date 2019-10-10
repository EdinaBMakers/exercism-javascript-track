export const gigasecond = (date) => {
  const GIGASEC_IN_MS = 1e12;
	return new Date(date.getTime() + GIGASEC_IN_MS);
};
