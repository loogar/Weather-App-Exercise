import React, {useContext} from 'react';
import {Box, Grid, LinearProgress, Paper} from '@material-ui/core';
import {api} from '../api';
import Error from './Error';
import Map from './Map';
import {useFetchHook} from '../Hooks/FetchHook';
import ConversionSwitch from './ConversionSwitch';
import Temperature from './Temperature';
import SearchLocation from './SearchLocation';
import CurrentTime from './CurrentTime';
import {WeatherContext} from '../Context/Context';
import {getQuery} from '../Helper/GetQuery';

const TodayWeather = ({location}) => {
  const {city} = useContext(WeatherContext);
  const [isLoading, today, error] = useFetchHook(
    `${api.todayUrl}?${getQuery(city, location)}&units=imperial&appId=${
      api.apiKey
    }`,
    location
  ); //get the data and url for the weather data

  if (isLoading) return <LinearProgress color='secondary' />;

  if (error)
    return (
      <Error errorMessage='Unable to get weather data, unknown city name.Please reload.' />
    );

  return (
    <Box m={2}>
      {today && (
        <Grid container direction='column' spacing={2}>
          <SearchLocation />

          <Grid item>
            <Map
              position={[today.coord.lat, today.coord.lon]}
              city={today.name}
              temp={today.main.temp}
            />
          </Grid>

          <Grid item>
            <Paper elevation={3}>
              <Box p={2}>
                <Grid container direction='column'>
                  <CurrentTime city={today.name} />
                  <Grid container justify='flex-end' alignItems='flex-end'>
                    <ConversionSwitch />
                  </Grid>
                  <Grid
                    item
                    container
                    direction='column'
                    alignItems='center'
                    justify='center'
                    spacing={1}
                  >
                    <Temperature
                      temp={today.main.temp}
                      condition={today.weather[0].main}
                      feelsLike={today.main.feels_like}
                      humidity={today.main.humidity}
                      min={today.main.temp_min}
                      max={today.main.temp_max}
                      icon={today.weather[0].icon}
                      date={today.dt_txt}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default TodayWeather;
