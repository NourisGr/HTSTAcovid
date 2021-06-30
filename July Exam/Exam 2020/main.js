let arrIngredients = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
];

function addItemToRecipe(what) {
    let arrayofitemnames = ["Salt","Carrots","Cucumber","Flouer","Milk","Mozzarella","Ppepper","Tomatoes","Water",]
    let theindexofwhat;
    if (what == "Salt") theindexofwhat = 0;
    else if (what == "Carrots") theindexofwhat = 1;
    else if (what == "Cucumber") theindexofwhat = 2;
    else if (what == "Flouer") theindexofwhat = 3;
    else if (what == "Milk") theindexofwhat = 4;
    else if (what == "Mozzarella") theindexofwhat = 5;
    else if (what == "Ppepper") theindexofwhat = 6;
    else if (what == "Tomatoes") theindexofwhat = 7;
    else if (what == "Water") theindexofwhat = 8;
    arrIngredients[theindexofwhat]++;
    resetrecipe();
    for (let i = 0; i < arrIngredients.length; i++) {
        if (arrIngredients[i] != 0) {
            document.getElementById("recipe").innerHTML += "<li>" + arrayofitemnames[i] + " x" + arrIngredients[i] + "</li>";
            
        }
    }
}

function resetrecipe() {
    document.getElementById("recipe").innerHTML = " ";
}