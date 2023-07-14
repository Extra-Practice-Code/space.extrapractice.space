console.log('script.js ✅')

// var block = document.querySelectorAll('.block')
// var home = document.getElementById('home')
// var info = document.getElementById('infos')


// // TO REMOVE BLOCKS CREATED BEFORE
// function removeBlocks() {
//     const blockies = document.getElementsByClassName("block");
//     while (blockies.length > 0) blockies[0].remove();
// }

// // CLICK ON MARKER CREATES IT'S INFO SHEET
// function showBlock(e) {
//     // console.log(e.target.options)
//     removeBlocks()
//     home.classList.add("hide")


//     let block = document.createElement("div");
//     block.className = 'block';
//     block.id = e.target.options.id;

//     let infoHeader = document.createElement("div");
//     infoHeader.className = 'infoHeader';

//     let infoTitle = document.createElement("h2");
//     infoTitle.innerHTML = e.target.options.title;

//     let infoDot = document.createElement("img");
//     infoDot.className = 'infoDot';
//     infoDot.src = "assets/img/" + e.target.options.category + ".svg";

//     let infoImage = document.createElement("img");
//     infoImage.src = "images/" + e.target.options.picture + "";

//     let infoText = document.createElement("p");
//     infoText.innerHTML = e.target.options.description;

//     let infoReturn = document.createElement("span");
//     infoReturn.className = 'link';
//     infoReturn.id = 'back';
//     infoReturn.innerHTML = '⇽return';
//     infoReturn.setAttribute("onclick", "returnHome()");


//     block.appendChild(infoHeader);
//     infoHeader.appendChild(infoTitle);
//     infoHeader.appendChild(infoDot);
//     block.appendChild(infoImage);
//     block.appendChild(infoText);
//     block.appendChild(infoReturn);
//     info.appendChild(block);
// }

