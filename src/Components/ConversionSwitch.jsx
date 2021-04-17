import React, {useContext} from 'react';
import {WeatherContext} from '../Context/Context';
import {Button} from '@material-ui/core';

const ConversionSwitch = () => {
  const {isMetric, setIsMetric} = useContext(WeatherContext);

  return (
    <Button color='secondary' onClick={() => setIsMetric(!isMetric)}>
      {isMetric ? `In Fahrenheit` : `In Celsius`}
    </Button>
  );
};

export default ConversionSwitch;
