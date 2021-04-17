## Weather-App Exercise for Data Impact:

- Today page: Shows current day temperature based on user location and a search bar allows users to search for desired city , and OpenWeatherMap icon representing the forecast weather conditions. A conversion switch to choose between Fahrenheit and Celsius.

- Upcoming page: Shows upcoming weather conditions for several days. The page consists of the max and min temperatures for upcoming days, based on the user current location and a search bar allows users to search for desired city. For each day, OpenWeatherMap icon representing the forecast weather conditions is included.

## Installation and configuration:

- Run the following command on your terminal 'git clone https://github.com/loogar/weather-app-exercise.git' to clone the repo into your local directory.
- Run 'npm i' to install all the required packages.
- Open the project files and open api.js and add your api key in 'apiKey: 'YOUR_API_KEY'' here and save.
- Run 'npm start' to run the project which will automatically start the project in a local host.

## Known Bug:

- Even though the map is rendered correctly, there is a problem of loading map with new Position.
- It stays on to the old one and only updates with previous value when there are location changes again.

## Languages and libraries:

- JavaScript
- React JS
- Material UI
- OpenWeatherMap API
- React-leaflet

## Features Used:

- React Hooks
- Custom React Hooks (useFetch, useLocation)
- Context API for state management
- React Router
- HTML5 Geo-location for user's location

## Deployment:

- App is deployed in https://xenodochial-mcnulty-63e30f.netlify.app using netlify.

## API Documentation:

https://openweathermap.org/
