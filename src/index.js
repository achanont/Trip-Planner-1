const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWNoYW5vbnQiLCJhIjoiY2sxNm04Mzl5MTc0cDNubnp6bTN4OXhmdCJ9.dwEXUIpmeZT4nOfSthZbmA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

const newMark = buildMarker('restaurants', [-87.641, 41.895]);
console.log(newMark);
newMark.addTo(map);
