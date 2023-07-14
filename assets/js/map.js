console.log('map.js  ✅')

////// INITIALIZE MAP //////
var map = L.map('map', {
    scrollWheelZoom: true,
    zoomControl: false,
    fullscreenControl: false,
}).setView([51.934798, 4.486473], 20);

L.tileLayer('https://tile.jawg.io/4378aa1a-91ff-451b-9222-61d136ef58a9/{z}/{x}/{y}{r}.png?lang=en&access-token={accessToken}', {
    attribution: '<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>',
    minZoom: 0,
    maxZoom: 22,
    subdomains: 'abcd',
    accessToken: 'rQ3OztHzFfdgiVdWp49I0ZbgqDdwyqOsjd1WvuZhgX9oKMHmqSRh5kXsVdGgNGuG',
}).addTo(map);

var lc = L.control
    .locate({
        position: "bottomleft",
    })
    .addTo(map);


// when you click on the map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at:<br>" + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);



// if we want to have layers to check and show
// var xpLayer = L.layerGroup([extrapractice]);
// var viewsLayer = L.layerGroup([viewRiver, viewHongkong]);
// var swimLayer = L.layerGroup([swimBrienenoord]);

// var overlayMaps = {
//     "<img src='assets/img/lime.svg' style='height:15px'> XP": xpLayer,
//     "<img src='assets/img/mediumslateblue.svg' style='height:15px'> Views": viewsLayer,
//     "<img src='assets/img/oragnered.svg' style='height:15px'> Swim": swimLayer,
// };

// var layerControl = L.control.layers(null, overlayMaps).addTo(map);
