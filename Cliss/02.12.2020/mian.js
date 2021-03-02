var cities = ["Luxembourg", "Esch", "Wiltz", "Schengen", "Paris", "Liverpool", "Athens"]

function arrays() {
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("ListOfCities").innerHTML += "<option>" + cities[i] + "</option>";
    }

    for (let i = cities.length - 1; i >= 0; i = i - 1) {
        document.getElementById("ListOfCitiesreversed").innerHTML += "<option>" + cities[i] + "</option>";
    }
}