'use strict';

var mapboxgl = require('mapbox-gl');
var d3 = require('d3');
var document = require('global/document');
var window = require('global/window');
var process = require('global/process');

// This will be inlined with the help of envify.
mapboxgl.accessToken = process.env.MapboxAccessToken;

var body = d3.select(document.body).style('margin', 0);

body.append('div')
  .attr('id', 'map')
  .style({
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px'
  });

var map = new mapboxgl.Map({
  container: 'map',
  zoom: 12.5,
  center: [-122.45, 37.79],
  style: 'mapbox://styles/mapbox/basic-v8',
  hash: false
});
