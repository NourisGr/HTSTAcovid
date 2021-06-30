let PokemonImages = ["Pikachu.png", "Charmeleon.png", "Caterpie.png", "Shiny.png", "Lugia.png", "Shiggy.png", "Ghost.png", "Gengar.png", "Greninja.png", "Onix.png", "Toxiped.png", "Bulbasaur.png"]
 
let arrayOfCardIds = [];
 
let firstCardRevealed = 0;
 
let CardRevealed = 0;
 
function Start() {
    for (let i = 0; i < PokemonImages.length; i++) {
        let newImage = document.createElement("img");
        newImage.src = "CardBack.png";
        newImage.id = "CardNo" + i;
        arrayOfCardIds.push(newImage.id);
        newImage.classList.add("oneCard");
        document.getElementById("myGame").append(newImage);
        newImage.addEventListener("click", function () { cardClicked(newImage.id, i); });  //Q try to change this
    }
}
 
function cardClicked(idOfClickedCard, PokemonIndex) {
 
    if (idOfClickedCard!=firstCardRevealed && CardRevealed!=2) {
        document.getElementById(idOfClickedCard).src = PokemonImages[PokemonIndex];
        CardRevealed++;
        if(CardRevealed==1) firstCardRevealed = idOfClickedCard;
        
        var cardClickedAudio = new Audio('Adúlti_Xupa_Cabra.mp3');
        cardClickedAudio.play();
 
        if (CardRevealed == 2) {
            setTimeout(function () {
                putImageBack();   //Q try to change this
            }, 1500);
        }
    }
 
}
 
function putImageBack() {
    for (CardIds of arrayOfCardIds) {
        document.getElementById(CardIds).src = "CardBack.png";
        firstCardRevealed = 0;
        CardRevealed = 0;
    }
}

PokemonImages = PokemonImages.sort(() =>Math.random() - 0.5)

