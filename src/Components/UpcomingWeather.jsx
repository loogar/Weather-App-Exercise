import React, {useContext} from 'react';
import {Box, Paper, Grid, LinearProgress} from '@material-ui/core';
import Error from './Error';
import {api} from '../api';
import Map from './Map';
import Temperature from './Temperature';
import CurrentTime from './CurrentTime';
import {getQuery} from '../Helper/GetQuery';
import SearchLocation from './SearchLocation';
import {useFetchHook} from '../Hooks/FetchHook';
import ConversionSwitch from './ConversionSwitch';
import {WeatherContext} from '../Context/Context';

const UpcomingWeather = ({location}) => {
  const {city} = useContext(WeatherContext);
  const [isLoading, upcoming, error] = useFetchHook(
    `${api.upcomingUrl}?${getQuery(city, location)}&units=imperial&appId=${
      api.apiKey
    }`,
    location
  );
  if (isLoading) return <LinearProgress color='secondary' />;

  if (error)
    return (
      <Error errorMessage='Unable to get weather data, unknown city name.Please reload.' />
    );

  return (
    <Box m={2}>
      {upcoming && (
        <Grid container direction='column' spacing={2}>
          <SearchLocation />
          <Grid item>
            <Map
              position={[upcoming.city.coord.lat, upcoming.city.coord.lon]}
              city={upcoming.city.name}
              temp={upcoming.list[0].main.temp}
            />
          </Grid>
          <Paper elevation={2}>
            <Box p={2}>
              <Grid container direction='column'>
                <CurrentTime city={upcoming.city.name} />
                <Grid container justify='flex-end' alignItems='flex-end'>
                  <ConversionSwitch />
                </Grid>
                <Grid container justify='space-evenly'>
                  {upcoming.list
                    .filter((data, index) => index % 8 === 0) //filter through the list of date and return data for the each date
                    .map((data) => (
                      <Grid
                        item
                        container
                        direction='column'
                        alignItems='center'
                        spacing={1}
                        xs={7}
                        md={3}
                        key={data.dt}
                      >
                        <Temperature
                          temp={data.main.temp}
                          condition={data.weather[0].main}
                          feelsLike={data.main.feels_like}
                          humidity={data.main.humidity}
                          min={data.main.temp_min}
                          max={data.main.temp_max}
                          icon={data.weather[0].icon}
                          date={data.dt_txt}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      )}
    </Box>
  );
};

export default UpcomingWeather;
