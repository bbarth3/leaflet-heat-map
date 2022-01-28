var map = L.map('map').setView([37.7, -122.4], 10);

var Stamen_Terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

$.getJSON('https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson', function(data) {
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});

