// script.js

// Initialize the map
var map = L.map('map').setView([-25.2744, 133.7751], 4); // Centered at Australia

// Add a base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for Fiji, Australia, and New Zealand
var markerFiji = L.marker([-17.7134, 178.0650]).addTo(map);
var markerAustralia = L.marker([-25.2744, 133.7751]).addTo(map);
var markerNewZealand = L.marker([-40.9006, 174.8860]).addTo(map);

// Add popups to markers
markerFiji.bindPopup("<b>Fiji</b><br>Welcome to Fiji!");
markerAustralia.bindPopup("<b>Australia</b><br>G'day mate!");
markerNewZealand.bindPopup("<b>New Zealand</b><br>Kia ora!");

