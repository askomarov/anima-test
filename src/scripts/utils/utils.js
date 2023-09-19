export const getDuration = (distance, step) => {
  const defaultDuration = 500;
  const durationIncrement = 100;
  const count = Math.round(Math.abs(distance) / step);

  return defaultDuration + durationIncrement * count;
};
