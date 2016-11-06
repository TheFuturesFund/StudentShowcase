function findHouseInZipcode(zipcode) {
  var url = "https://data.brla.gov/resource/5rji-ddnu.json?$where=zip=" + "'" + zipcode + "'"
  var request = $.ajax(url)
  request.done(displayHouse)
  request.fail(handleError)
}

function displayHouse(houseData) {
  var list = ""
  for (index in houseData) {
    house = houseData[index]
    list = list + "<li>" + house.house + "</li>"
  }
  $("ul#house-list").html(list)
}

function handleError(_request, _status, error) {
  alert("An error occured: " + error)
}

function formSubmitted(event) {
  event.preventDefault()
  var zipcode = $("input[name=zipcode]").val()
  findHousesInZipcode(zipcode)
}

$("form#house-form").submit(formSubmitted)
