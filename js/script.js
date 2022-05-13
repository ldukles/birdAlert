// API Settings
// var settings = {
//   "url": `https://api.ebird.org/v2/data/obs/US-` + `${userInput}` + `/recent/notable?detail=simple`,
//   "method": "GET",
//   "timeout": 0,
//   "data": {back: 1, maxResults: 10},
//   "headers": {
//     "X-eBirdApiToken": "g239pf3095hj",
//   },
// };


// Checking API Connection
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

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
$form.on('submit', handleGetData);


// Functions
function handleGetData(event) {
  event.preventDefault();
  // data expansion to include form submissions
  const userInput = $input.val(); 

  $.ajax(URL = {
    url: `https://api.ebird.org/v2/data/obs/US-` + `${userInput}` + `/recent/notable?detail=simple`,
  method: "GET",
  timeout: 0,
  data: {back: 1, maxResults: 10},
  headers: {
    "X-eBirdApiToken": "g239pf3095hj"},
 
  }).then(
    
    function (data) {
      
      console.log("rare birds detected");
      // console.log(data[0].comName)
  
      $comName.text(data[0].comName)
      $sciName.text(data[0].sciName)
      $locName.text(data[0].locName)
      $obsDt.text(data[0].obsDt)
      $howMany.text(data[0].howMany)
      $obsValid.text(data[0].obsValid)

      
    },
    
  

    function (error) {
      console.log("something ain't right");
      console.log(error);
    }
  );
}
