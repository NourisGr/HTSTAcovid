var arrOfItems = ["carrots", "cucumber", "flouer", "milk"]; // given Array

function Start() {
    let myImage = document.createElement("img"); // create the image
    myImage.alt = "Please select image"; // give it an ALT text

    let mySelect = document.createElement("select"); // create a select element
    // we can given our select an ID as well with:
    mySelect.id = "mySelectBox"; // but I HAVENT used this id !!
    for (let i = 0; i < arrOfItems.length; i++) {
        // for each element in the array
        let newOption = document.createElement("option"); // create a new option
        newOption.append(arrOfItems[i]); // add the text inside
        newOption.value = i; // SET the value
        mySelect.append(newOption); // add the new option into the select
    }
    // create one last option - that will be our DEFAULT, to hold the text "Please select an option"
    let defaultOption = document.createElement("option");
    defaultOption.append("Please select an option");
    defaultOption.value = -1;
    defaultOption.selected = true;
    mySelect.append(defaultOption);

    document.body.append(mySelect);
    document.body.append(myImage);

    mySelect.addEventListener("change", function () {
        myImage.src = "";
        if (mySelect.value >= 0) {
            myImage.src = arrOfItems[mySelect.value] + ".jpg";
        }
    });
}
