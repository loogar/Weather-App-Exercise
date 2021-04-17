export const getTemperature = (temperature, isMetric) => {
  return isMetric
    ? Math.round(convertToCelsius(temperature)) + '\xB0C'
    : Math.round(temperature) + '\xB0F';
};

const convertToCelsius = (temperatureInF) => (temperatureInF - 32) / 1.8; // converts temperature to celsius
