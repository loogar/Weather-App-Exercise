import React, {useContext} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {getTemperature} from '../Helper/GetTemperature';
import {api} from '../api';
import {WeatherContext} from '../Context/Context';

const Temperature = (props) => {
  const {isMetric} = useContext(WeatherContext);
  const {date, temp, min, max, feelsLike, humidity, condition, icon} = props;

  return (
    <>
      <Grid item>
        <Typography variant='subtitle2'>
          {date && new Date(date).toString().slice(0, 10)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4'>{getTemperature(temp, isMetric)}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' color='textSecondary'>
          Min Temperature :{getTemperature(min, isMetric)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' color='textSecondary'>
          Max Temperature :{getTemperature(max, isMetric)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' color='textSecondary'>
          Real Feel: {getTemperature(feelsLike, isMetric)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' color='textSecondary'>
          Humidity :{humidity}%
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='subtitle2' color='textSecondary'>
          Condition: {condition}
        </Typography>
      </Grid>
      <Grid item>
        <img
          src={`${api.weatherIconUrl}/${icon}@2x.png`}
          alt='weather-icon'
        ></img>
      </Grid>
    </>
  );
};

export default Temperature;
