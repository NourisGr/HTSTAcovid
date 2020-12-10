var countries = ["Luxembourg", "USA", "France", "Germany", "Italy"];

function fillInSelect() {
    for (let i = 0; i < countries.length; i++) {
        document.getElementById("listOfCountries").innerHTML += '<option>' + countries[i] + "</option>";
    }
}

function SelectThisCountry() {
    let a = document.getElementById("listOfCountries").value;
    //alert(a);
    document.getElementById("selectedCountries").innerHTML += '<li>' + a + '</li>';
}