import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import TodayWeather from './TodayWeather';
import UpcomingWeather from './UpcomingWeather';
import WeatherProvider from '../Context/WeatherProvider';

const MainContent = ({location}) => {
  return (
    <WeatherProvider>
      <Switch>
        <Route exact path='/today'>
          <TodayWeather location={location} />
        </Route>
        <Route exact path='/upcoming'>
          <UpcomingWeather location={location} />
        </Route>

        <Redirect to='/today'></Redirect>
      </Switch>
    </WeatherProvider>
  );
};

export default MainContent;
