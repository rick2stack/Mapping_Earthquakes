// Add console.log to check to see if our code is working
console.log("working");
// Create the map object with a center and zoom level.
// the setView([lat,long],zoomlevel), zoom level is 0-18 scale
// Create the map object with a center and zoom level and label attributes.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 6
  });

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //accessToken: API_KEY
//});

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// this adds a radius of x amount of meters
var marker = L.marker([34.0522, -118.2437]).addTo(map);
var circle= L.circle([34.0522, -118.2437], {
  color: "yellow",
  radius: 100
}).addTo(map);

/// creates a circle/measures a circle. Default size is 10 pixels
L.circleMarker([34.0522, -118.2437], {
  radius:100,
  color: "red",
  fillcolor: "#ffffa1"
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>").addTo(map);
});