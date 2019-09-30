const mapboxgl = require('mapbox-gl');
const index = require('./index');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = function(type, coords) {
  // Your Code Here
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  console.log('here is markerDOM', markerDomEl);

  const markX = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
  return markX;
};

module.exports = buildMarker;
