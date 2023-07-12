const table = document.querySelector('tbody')

function init () {
  createData()
  
  var table = document.getElementById('data');
  var sort = new Tablesort(table);
  // new Tablesort(table), {
  //   descending: false
  // };
}

function createData() {
  console.log(allData)

  allData.forEach(function (allData) {
    let dataTitle = allData.title;
    let dataUpdated = allData.updated;
    let dataURL = allData.url;
    let dataDescription = allData.description;

    let block = document.createElement("tr");
    block.className = allData.status;
    block.setAttribute("onClick", "location.href='" + allData.url + "'");

    let updated = document.createElement("td");
    updated.innerHTML = allData.updated;
    block.appendChild(updated);

    let title = document.createElement("td");
    title.innerHTML = allData.title;
    title.id = 'change';
    block.appendChild(title);

    let description = document.createElement("td");
    description.innerHTML = allData.description;
    block.appendChild(description);

    table.appendChild(block);
  });
}

function invertArrow(e) {
  e.classList.toggle("invertArrow");
}

init()



// THIS IS ABOUT THE PASSWORD
const secret = document.querySelectorAll('.secret')


// here when the passwords matchs it show the hidden
function showSecrets() {
  for (let i = 0, max = secret.length; i < max; i++) {
    secret[i].classList.add("show");
  }
}

// the password script
function clickPress(event) {
  if (event.key == "Enter") {
    const passw = "XP4EVER";
    if (document.form.texte.value.match(passw)) {
      showSecrets()
      document.querySelector('#texte').classList.remove('badpass');
      document.querySelector('.contenu').style.display = 'block';

    }
    else {
      document.querySelector('#texte').classList.add('badpass');
      document.querySelector('#texte').value = '⊙.☉';
      document.querySelector('.contenu').style.display = 'none';
    }
  }
}
