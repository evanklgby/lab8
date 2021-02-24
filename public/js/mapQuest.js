function initMap() {
  L.mapquest.key = 'pjJD4Bol9zsAUs3CGA7mvp1xCXS0s91Z';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.87852, -117.23589],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false,
  });

  // Add a marker to the map
  L.marker([32.87852, -117.23589]).addTo(map);
}
