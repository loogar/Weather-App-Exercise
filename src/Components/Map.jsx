import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Grid} from '@material-ui/core';
import {api} from '../api';

const Map = (props) => {
  const {position, city, temp} = props;

  return (
    <Grid>
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: '300px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.osm.org/{z}/{x}/{y}.png`}
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${api.apiKey}`}
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${api.apiKey}`}
        />
        <Marker position={position}>
          <Popup>
            City: {city}
            <br></br>
            Temperature: {temp + '\xB0F'}
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};

export default Map;
