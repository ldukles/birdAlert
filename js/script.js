// Hide Elements until prompted
// var $p = $("p");
// $p.hide();


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
$form.on('submit', handleGetData);


// Functions
function handleGetData(event) {
  // $form.on("submit", handleGetData);
  event.preventDefault();
  // data expansion to include form submissions
  const userInput = $input.val();
  // let URL = `https://api.ebird.org/v2/data/obs/US-` + `${userInput}` + `/recent/notable?detail=simple`;
 

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
      
  
      $comName.text(data.comName)
      $comName.text(data.comName)
      $sciName.text(data.sciName)
      $locName.text(data.locName)
      $obsDt.text(data.obsDt)
      $howMany.text(data.howMany)
      $obsValid.text(data.obsValid)
      $('main').append(`<main>"${$("data")}"</main>`)

      console.log(data)
      let $data = $(data.value())
      console.log($data.value())
      
    },
    
  

    function (error) {
      console.log("something ain't right");
      console.log(error);
    }
  );
}
