console.log('import.js ✅')

var title = document.querySelector('h2')

var blurbTitle = document.getElementById('blurbTitle')
var blurbCover = document.getElementById('blurbCover')
var blurbAuthor = document.getElementById('blurbAuthor')
var blurbYear = document.getElementById('blurbYear')
var blurbDate = document.getElementById('blurbDate')
var blurbStatus = document.getElementById('blurbStatus')
var blurbAction = document.getElementById('blurbAction')
var blurbProprietary = document.getElementById('blurbProprietary')
var blurbColor = document.getElementById('blurbColor')
var blurbHeight = document.getElementById('blurbHeight')
var blurbScore = document.getElementById('blurbScore')
var blurbReview = document.getElementById('blurbReview')



var getJSON = function (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON("https://opensheet.elk.sh/1i2qK9If--zLJWyNxfymbViznZlIXVEYkmqzuzoZ2_MQ/library").then(function (data) {
  console.log(data)

  data.forEach(function (row, index) {
    var stack = document.querySelector('.stack')

    
    let dataSpan = document.createElement("span");
    let dataImage = document.createElement("img");
    dataImage.className = row.published + ' book';
    dataImage.dataset.order = row.order;
    dataImage.src = "images/" + row.id + ".jpg";
    dataImage.id = row.id;
    
    dataSpan.appendChild(dataImage);
    stack.appendChild(dataSpan);
    
    dataImage.addEventListener('click', (event) => {
      
      title.innerHTML = 'Details';

      // see the id, but not needed now
      var wichBook = event.target.id
      console.log(wichBook)

      // removes old data
      resetInfo()

      // WRITE THE DATA ON THE BLURB SECTION
      blurbTitle.innerHTML = row.title;
      blurbCover.src = "" + row.cover + "";
      blurbYear.innerHTML = row.year;
      blurbAuthor.innerHTML = row.author;
      blurbDate.innerHTML = row.date;
      blurbStatus.innerHTML = row.status;
      blurbAction.className = row.status;
      blurbProprietary.innerHTML = row.proprietary;
      blurbColor.style.backgroundColor = row.color;
      blurbHeight.innerHTML = row.height;
      blurbScore.innerHTML = row.score;
      blurbReview.innerHTML = row.review;

      // check and add the action button
      addAction()


      // for putting some external link
      // let dataWebsite = document.createElement("a");
      // dataWebsite.innerHTML = row.website;
      // dataWebsite.href = row.website;
      // dataWebsite.setAttribute('target', '_blank');
      // blurbWebsite.appendChild(dataWebsite);

      if (blurbTitle.innerHTML.trim() == "") {
        blurbTitle.innerHTML = '⿳';
      }
      if (blurbYear.innerHTML.trim() == "") {
        blurbYear.innerHTML = '⿳';
      }
      if (blurbAuthor.innerHTML.trim() == "") {
        blurbAuthor.innerHTML = '⿳';
      }
      if (blurbDate.innerHTML.trim() == "") {
        blurbDate.innerHTML = '⿳';
      }
      if (blurbStatus.innerHTML.trim() == "") {
        blurbStatus.innerHTML = '⿳';
      }
      if (blurbAction.innerHTML.trim() == "") {
        blurbAction.innerHTML = '⿳';
      }
      if (blurbProprietary.innerHTML.trim() == "") {
        blurbProprietary.innerHTML = '⿳';
      }
      // if (blurbColor.innerHTML.trim() == "") {
      //   blurbColor.style.backgroundColor = 'transparent';
      // }
      if (blurbHeight.innerHTML.trim() == "") {
        blurbHeight.innerHTML = '⿳';
      }
      if (blurbScore.innerHTML.trim() == "") {
        blurbScore.innerHTML = '⿳';
      }
      if (blurbReview.innerHTML.trim() == "") {
        blurbReview.innerHTML = '⿳';
      }

      
    })
  });

}, function (status) { //error detection....
  alert('Something went wrong.');
});


function resetInfo() {
  blurbTitle.innerHTML = '⿳';
  blurbCover.src = '⿳';
  blurbYear.innerHTML = '⿳';
  blurbAuthor.innerHTML = '⿳';
  blurbDate.innerHTML = '⿳';
  blurbStatus.innerHTML = '⿳';
  blurbAction.innerHTML = '⿳';
  blurbProprietary.innerHTML = '⿳';
  blurbColor.style.backgroundColor = 'transparent';
  blurbHeight.innerHTML = '⿳';
  blurbScore.innerHTML = '⿳';
  blurbReview.innerHTML = '⿳';
}

function addAction() {
  if (blurbAction.classList.contains("used")) {
    let actionMail = document.createElement("a");
    actionMail.href = "mailto:info@extrapractice.space?subject=Let's discuss!";
    let actionButton = document.createElement("button");
    actionButton.innerHTML = 'Discuss!';

    blurbAction.innerHTML = '';

    actionMail.appendChild(actionButton);
    blurbAction.appendChild(actionMail);
  }

  if (blurbAction.classList.contains("idle")) {
    let actionMail = document.createElement("a");
    actionMail.href = 'mailto:info@extrapractice.space?subject=Borrow request!';
    let actionButton = document.createElement("button");
    actionButton.innerHTML = 'Borrow!';

    blurbAction.innerHTML = '';

    actionMail.appendChild(actionButton);
    blurbAction.appendChild(actionMail);
  }

  if (blurbAction.classList.contains("wanted")) {
    let actionMail = document.createElement("a");
    actionMail.href = 'mailto:info@extrapractice.space?subject=Want to offer!';
    let actionButton = document.createElement("button");
    actionButton.innerHTML = 'Offer it!';

    blurbAction.innerHTML = '';

    actionMail.appendChild(actionButton);
    blurbAction.appendChild(actionMail);
  }


}
