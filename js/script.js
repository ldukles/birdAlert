var settings = {
  url: "https://api.ebird.org/v2/data/obs/US-NY/recent/notable?detail=full",
  method: "GET",
  timeout: 0,
  data: {back: 1, detail: 'simple', maxResults: 10},
  headers: {
    "X-eBirdApiToken": "g239pf3095hj",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
//   Variables
const URL =
  "https://api.ebird.org/v2/data/obs/US-NY/recent/notable?detail=full";

// Element References
const $comName = $("#comName");
const $sciName = $("#sciName");
const $locName = $("#locName");
const $obsDt = $("#obsDt");
const $howMany = $("#howMany");
const $obsValid = $("obsValid");
const $input = $(`input[type=text]`);
const $form = $("form");


// Event Listeners
$form.on("submit", handleGetData);

// Functions
function handleGetData(event) {
  event.preventDefault();
  // data expansion to indlude form submissions
  const userInput = $input.val();

  $.ajax(URL + userInput).then(
    function (data) {
      console.log("Rare Birds Detected");
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

//   All elements
//   {
//     "speciesCode": "libher",
//     "comName": "Little Blue Heron",
//     "sciName": "Egretta caerulea",
//     "locId": "L295658",
//     "locName": "Wallkill River NWR--Liberty Marsh (NY)",
//     "obsDt": "2017-08-23 10:11",
//     "howMany": 1,
//     "lat": 41.2833266,
//     "lng": -74.5262526,
//     "obsValid": false,
//     "obsReviewed": false,
//     "locationPrivate": false,
//     "subnational2Code": "US-NY-071",
//     "subnational2Name": "Orange",
//     "subnational1Code": "US-NY",
//     "subnational1Name": "New York",
//     "countryCode": "US",
//     "countryName": "United States",
//     "userDisplayName": "Kathleen Ashman",
//     "subId": "S38783126",
//     "obsId": "OBS527233428",
//     "checklistId": "CL22364",
//     "presenceNoted": false,
//     "hasComments": false,
//     "firstName": "Kathleen",
//     "lastName": "Astahman",
//     "hasRichMedia": false,
//     "locID": "L295658"
//   },
