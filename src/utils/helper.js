export const validateAndFormatInterval = (interval, currentInterval) => {
  if (interval <= 0 || interval > 30) {
    return {
      error: "Interval value must be greater than 0s and less than 30s",
    };
  }
  if (interval === currentInterval) {
    return {
      error: "Interval value must be different from the current one",
    };
  }
  return { result: interval };
};
