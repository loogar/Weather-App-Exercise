import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {LocationOn} from '@material-ui/icons';

const CurrentTime = ({city}) => {
  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }); // getting local time on hh:mm format
  return (
    <Grid item>
      <Grid container spacing={1}>
        <Grid item>
          <LocationOn color='disabled' />
        </Grid>
        <Grid item>
          <Typography variant='h6' gutterBottom>
            {city}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            {getCurrentTime()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrentTime;
