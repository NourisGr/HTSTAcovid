function addOptionsToSelect(targetSelect, arrOfOptios) {
    for (let i = 0; i < arrOfOptios.length; i++) {
        let newOption = document.createElement("option");
        targetSelect.append(newOption);
        newOption.value = i;
        newOption.innerHTML = arrOfOptios[i];
    }
}

function Start() {
    let arrOfOperations = ["+", "-", "/", "*"];
    let signOptions = ["<", ">"];
    let firstInput = document.createElement("input");
    document.body.append(firstInput);
    let operationSelect = document.createElement("select");
    addOptionsToSelect(operationSelect, arrOfOperations);
    document.body.append(operationSelect);
    let secondInput = document.createElement("input");
    document.body.append(secondInput);
    let signSelect = document.createElement("select");
    addOptionsToSelect(signSelect, signOptions);
    document.body.append(signSelect);
}
