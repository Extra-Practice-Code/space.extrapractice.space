console.log('markers.js  ✅')


////// ICONS (same found on style.css line 177) //////
var xpCategory = 'lime';
var viewCategory = 'BlueViolet';
var swimCategory = 'tomato';


////// MARKERS //////
var extrapractice = L.circle([51.934798, 4.486473], {
    category: 'xpCategory',
    color: xpCategory,
    fillColor: xpCategory,
    fillOpacity: 1,
    radius: 20,

    title: 'Extra Practice Space',
    picture: 'extrapractice.jpg',
    description: 'Here is the ExtraPractice place. Where Ben, Emma, Gijs, Jack and Kirsten usually do their stuffs.',
}).on('click', showBlock, function (e) { this.openPopup() }).addTo(map).on('mouseover', function (e) { this.openPopup() }).on('mouseout', function (e) { this.closePopup() }).bindPopup("<b>Extra Practice Space</b>").openPopup();


var viewRiver = L.circle([51.902107, 4.480151], {
    category: 'viewCategory',
    color: viewCategory,
    fillColor: viewCategory,
    fillOpacity: 1,
    radius: 20,

    title: 'View at the river',
    picture: 'view-river.jpg',
    description: 'Beautiful wide view of the river.',
}).on('click', showBlock).addTo(map).on('mouseover', function (e) { this.openPopup() }).on('mouseout', function (e) { this.closePopup() }).bindPopup("<b>View at the river");

var viewHongkong = L.circle([51.898498, 4.527038], {
    category: 'viewCategory',
    color: viewCategory,
    fillColor: viewCategory,
    fillOpacity: 1,
    radius: 20,

    title: 'Hong-Kong view',
    picture: 'view-hong-kong.jpg',
    description: 'Beautiful end of island where you have a very big view of the sky with the city at the far away.',
}).on('click', showBlock, function (e) { this.openPopup() }).addTo(map).on('mouseover', function (e) { this.openPopup() }).on('mouseout', function (e) { this.closePopup() }).bindPopup("<b>Hong-Kong view</b>");

var swimBrienenoord = L.circle([51.898712, 4.531567], {
    category: 'swimCategory',
    color: swimCategory,
    fillColor: swimCategory,
    fillOpacity: 1,
    radius: 20,

    title: 'Swim at Brienenoord',
    picture: 'swim-brienenoord.jpg',
    description: 'You can jump in this little lake inside ce island. The wood platform is very quiet and simple.',
}).on('click', showBlock, function (e) { this.openPopup() }).addTo(map).on('mouseover', function (e) { this.openPopup() }).on('mouseout', function (e) { this.closePopup() }).bindPopup("<b>Swim at Brienenoord</b>");

var swimPrinsenmolen = L.circle([51.951129, 4.50094], {
    category: 'swimCategory',
    color: swimCategory,
    fillColor: swimCategory,
    fillOpacity: 1,
    radius: 20,

    title: 'Swim at Prinsenmolen',
    picture: 'prinsenmolen.jpg',
    description: 'At the mill there is a dock from which you can get into the Rotte for a fresh dip. Sometimes the owner of the mill comes out for a chat.',
}).on('click', showBlock).addTo(map).on('mouseover', function (e) { this.openPopup() }).on('mouseout', function (e) { this.closePopup() }).bindPopup("<b>Swim at Prinsenmolen</b>");