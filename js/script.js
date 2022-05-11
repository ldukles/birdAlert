// Hide Elements until prompted
// var $p = $("p");
// $p.hide();


// API Settings
var settings = {
  "url": "https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable?detail=full",
  "method": "GET",
  "timeout": 0,
  "data": { back: 1, maxResults: 10 },
  "headers": {
    "X-eBirdApiToken": "g239pf3095hj",
  },
};

// Checking API Connection
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


//   Variables



// Element References
const $comName = $("#comName");
const $sciName = $("#sciName");
const $locName = $("#locName");
const $obsDt = $("#obsDt");
const $howMany = $("#howMany");
const $obsValid = $("#obsValid");
const $input = $(`input[type=text]`);
const $form = $("form");


// Event Listeners
$form.on("submit", handleGetData);


// Functions
function handleGetData(event) {
  event.preventDefault();
  // data expansion to include form submissions
  const URL =
  `https://api.ebird.org/v2/data/obs/US-` + `${userInput}` + `/recent/notable?detail=simple`;
  const userInput = $input.val();

  $.ajax(URL).then(
    function (data) {
      console.log("rare birds dettected");
      $comName.text(data.Common);
      $sciName.text(data.Scientific);
      $locName.text(data.Location);
      $obsDt.text(data.Date);
      $howMany.text(data.How);
      $obsValid.text(data.Verified);
    },
    function (error) {
      console.log("something ain't right");
      console.log(error);
    }
  );
}

// function render() {
//   $comName.text(birdData.comName);
//   $sciName.text(birdData.sciName);
//   $locName.text(birdData.locName);
//   $obsDt.text(birdData.obsDt);
//   $howMany.text(birdData.howMany);
//   $obsValid.text(birdData.obsValid);
// }
