console.log('import.js ✅')

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
    var leftSide = document.querySelector('.leftSide')

    let dataImage = document.createElement("img");
    dataImage.className = row.published;
    dataImage.id = row.image;
    dataImage.dataset.order = row.order;
    dataImage.src = "images/" + row.image + ".jpg";
    leftSide.appendChild(dataImage);

    dataImage.addEventListener('click', (event) => {
      var wichBook = event.target.id

      // WRITE THE DATA ON THE BLURB SECTION
      var blurbTitle = document.getElementById('blurbTitle')
      var blurbAuthor = document.getElementById('blurbAuthor')
      var blurbYear = document.getElementById('blurbYear')
      var blurbDate = document.getElementById('blurbDate')
      var blurbStatus = document.getElementById('blurbStatus')
      var blurbProprietary = document.getElementById('blurbProprietary')
      var blurbColor = document.getElementById('blurbColor')
      var blurbHeight = document.getElementById('blurbHeight')
      var blurbScore = document.getElementById('blurbScore')
      var blurbReview = document.getElementById('blurbReview')
      var blurbWebsite = document.getElementById('blurbWebsite')

      let dataTitle = document.createElement("td");
      dataTitle.innerHTML = row.title;
      blurbTitle.appendChild(dataTitle);

      let dataYear = document.createElement("td");
      dataYear.innerHTML = row.year;
      blurbAuthor.appendChild(dataYear);

      let dataAuthor = document.createElement("td");
      dataAuthor.innerHTML = row.author;
      blurbYear.appendChild(dataAuthor);

      let dataDate = document.createElement("td");
      dataDate.innerHTML = row.date;
      blurbDate.appendChild(dataDate);

      let dataStatus = document.createElement("td");
      dataStatus.innerHTML = row.status;
      blurbStatus.appendChild(dataStatus);

      let dataProprietary = document.createElement("td");
      dataProprietary.innerHTML = row.proprietary;
      blurbProprietary.appendChild(dataProprietary);

      let dataColor = document.createElement("div");
      dataColor.className = 'squareColor';
      dataColor.style.backgroundColor = row.color;
      blurbColor.appendChild(dataColor);

      let dataHeight = document.createElement("td");
      dataHeight.innerHTML = row.height + "cm";
      blurbHeight.appendChild(dataHeight);

      let dataScore = document.createElement("td");
      dataScore.innerHTML = row.score;
      blurbScore.appendChild(dataScore);

      let dataReview = document.createElement("td");
      dataReview.innerHTML = row.review;
      blurbReview.appendChild(dataReview);

      let dataWebsite = document.createElement("a");
      dataWebsite.innerHTML = row.website;
      dataWebsite.href = row.website;
      dataWebsite.setAttribute('target', '_blank');
      blurbWebsite.appendChild(dataWebsite);

      console.log(wichBook)
    })
  });

}, function (status) { //error detection....
  alert('Something went wrong.');
});