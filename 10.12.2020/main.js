var countries = ["Luxembourg", "Greece", "France", "Germany", "Italy"];

function fillInSelect() {
    for (let i = 0; i < countries.length; i++) {
        document.getElementById("listOfCountries").innerHTML += "<option value=" + i + ">" + countries[i] + "</option>";
    }
}

function SelectThisCountry() {
    let currentSelectCountry = document.getElementById("listOfCountries").value;
    if (currentSelectCountry == -1) {
        alert("Wrong choice");
    } else {
        document.getElementById("selectedCountries").innerHTML += '<li>' + countries[currentSelectCountry] + "</li>";
    }
}