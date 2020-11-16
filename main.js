var countBoxes=0;
var currentBoxColor= "boxcolor1";
function CreatBox() {
    let strOfRepeatingBoxes = document.getElementById("clickTimes").value;
    let numbersOfRepeatingBoxes = Number (strOfRepeatingBoxes);
    for (let i = 0; 1 < numbersOfRepeatingBoxes; i++)   {
        countBoxes++;
        let addBox = '<div classes="box ' + currentBoxColor +'">' + countBoxes '</div>';

        if (currentBoxColor == "boxColor1") {
            currentBoxColor = "box Color2";
        }
        
    }

}