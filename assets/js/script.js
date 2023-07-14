console.log('script.js ✅')

var block = document.querySelectorAll('.block')
var home = document.getElementById('home')
var info = document.getElementById('infos')


// to clean the info data created 
function removeBlocks() {
    const blockies = document.getElementsByClassName("block");
    while (blockies.length > 0) blockies[0].remove();
}

// return arrow function
function returnHome() {
    removeBlocks()
    home.classList.remove("hide")
}


// CLICK ON MARKER CREATES IT'S INFO SHEET
function showBlock(e) {
    removeBlocks()

    var marker = e.target.options;

    home.classList.add("hide")

    let block = document.createElement("div");
    block.className = 'block';
    block.id = marker.id;

    let infoHeader = document.createElement("div");
    infoHeader.className = 'infoHeader';

    let infoTitle = document.createElement("h2");
    infoTitle.innerHTML = marker.title;
    infoTitle.className = marker.category;

    let infoImage = document.createElement("img");
    infoImage.src = "images/" + marker.picture + "";

    let infoText = document.createElement("p");
    infoText.innerHTML = marker.description;

    let infoReturn = document.createElement("span");
    infoReturn.className = 'link';
    infoReturn.id = 'back';
    infoReturn.innerHTML = '⇽ return';
    infoReturn.setAttribute("onclick", "returnHome()");


    block.appendChild(infoReturn);
    block.appendChild(infoHeader);
    infoHeader.appendChild(infoTitle);
    block.appendChild(infoImage);
    block.appendChild(infoText);
    info.appendChild(block);
}


function flyTo(e) {
    // here you can modify the zoom level when flying to a point!
    map.flyTo(e.getLatLng(), 17)
    e.openPopup();

    // i was not able to open the info data when flying to a point!
    // showBlock(e)
}

