var $p = $('p');
$p.hide();

var settings = {
  "url": "https://api.ebird.org/v2/data/obs/US-NY/recent/notable?detail=full",
  "method": "GET",
  "timeout": 0,
  "data": {back: 1, detail: "simple", maxResults: 10},
  "headers": {
    "X-eBirdApiToken": "g239pf3095hj"
  },
};

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
//   Variables
const URL = "https://api.ebird.org/v2/data/obs/US-NY/recent/notable?detail=full"


// Element References
const $comName = $("#comName");
const $sciName = $("#sciName");
const $locName = $("#locName");
const $obsDt = $("#obsDt");
const $howMany = $("#howMany");
const $obsValid =$("obsValid");
const $input = $(`input[type=text]`);
const $form = $("form");

// Event Listeners
$form.on("go", handleGetData);

// Functions
function handleGetData(event) {
  event.preventDefault();
// data expansion to indlude form submissions
const userInput = $input.val();

$.ajax(URL + userInput).then(
  function (data) {
      console.log("Rare Birds Detected")
      $comName.text(data.comName);
$sciName.text(data.sciName);
$locName.text(data.locName);
$obsDt.text(data.obsDt);
$howMany.text(data.howMany);
$obsValid.text(data.obsValid);
  },
  function (error) {
      console.log("something ain't right");
      console.log(error);
  }
);
}

function render() {
  $comName.text(birdData.comName);
  $sciName.text(birdData.sciName);
  $locName.text(birdData.locName);
  $obsDt.text(birdData.obsDt);
  $howMany.text(birdData.howMany);
  $obsValid.text(birdData.obsValid);
};