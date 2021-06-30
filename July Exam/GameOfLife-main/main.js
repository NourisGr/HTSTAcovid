var matrixGOL = []; // our Game of Life matrix
var numRows = 0; // the number of rows that will be read from the input
var numCols = 0; // the number of columns that will be read from input
var maxSlider = 3000; // the maximum slider value -> 3000 (on the right side) -> 3 seconds refresh
var minSlider = 50; // minimum slider (on the left side)
var gameSpeed = 3000; // the current game speed - changed by the slider "change" event
var gameIsRunning = false; // boolean flag marking if the game is running or not

// start function - called when the first button is clicked
function Start() {
    numCols = Number(document.getElementById("numCols").value); // read the rows
    numRows = Number(document.getElementById("numRows").value); // read the columns
    document.body.innerHTML = ""; // reset ALL the page
    let gameContents = document.createElement("div"); // create a new div to hold our game of life
    document.body.append(gameContents); // add this to the page
    for (let i = 0; i < numRows; i++) {
        // for each row
        let newRowArr = []; // create a new row array
        matrixGOL.push(newRowArr); // add it to our matrix
        let newRowDiv = document.createElement("div"); // create a new row div that will hold one full ROW
        newRowDiv.classList.add("row"); // add the "row" class -> display:flex such that all elements of a row stay in one row
        gameContents.append(newRowDiv); // add the new row to the page
        for (let j = 0; j < numCols; j++) {
            // for each column
            newRowArr.push(0); // add a new number -> that is initially 0
            let newCellDiv = document.createElement("div"); // create a new cell div
            newCellDiv.id = "Cell" + i + j; // give it an id
            newCellDiv.classList.add("box"); // give it style
            newRowDiv.append(newCellDiv); // add it to the new row (and therefore the page)
            newCellDiv.addEventListener("click", function () {
                // when we click a cell
                matrixGOL[i][j] = (matrixGOL[i][j] + 1) % 2; // if it was 0 make it 1, if it was 1 make it 0
                newCellDiv.classList.toggle("colored"); // toggle the class "colored" - if it was colored remove, if it was not colored add
            });
        }
    }
    let resetButton = document.createElement("button"); // create a new button
    resetButton.innerHTML = "Start game"; // set its text to be "start game"
    document.body.append(resetButton); // add this button to the page
    resetButton.addEventListener("click", function () {
        // when we clicked the button
        gameIsRunning = !gameIsRunning; // if the game was running, stop it. If it was stopped - start it
        if (gameIsRunning) {
            // if the game is running now
            setTimeout(nextGeneration, gameSpeed);
            // start a timer, using the game speed, call nextGeneration when the timer expires

            resetButton.innerHTML = "Stop game"; // change the button text to be "Stop game"
        } else {
            // if the game is NOT running now
            resetButton.innerHTML = "Start game"; // change the button text to be "Start game"
            // reset all matrix contents
            for (let i = 0; i < numRows; i++)
                // for each row
                for (let j = 0; j < numCols; j++) {
                    //for each column
                    matrixGOL[i][j] = 0; // set the cell to be dead
                    refreshCell(i, j); // show it on the screen
                }
        }
    });
    let slider = document.createElement("input"); // create a new slider -> input element
    slider.type = "range"; // set its type to be slider
    slider.min = minSlider; // set its minimum value
    slider.max = maxSlider; // its maximum
    slider.value = maxSlider - gameSpeed + minSlider; // the actual value is "INVERSELY" linked to the game speed
    /*
    LEFT values are SLOW speeds -> big numbers for timeout (but the slider gives us SMALL VALUES)
    therefore we needed to REVERSE the game speed and the slider values, using the above formula
    */
    slider.addEventListener("change", function () {
        // when the slider changed value
        gameSpeed = maxSlider - Number(slider.value) + minSlider; // recompute the game speed from the slider value
        // same formula as above, just that we now take gameSpeed from slider.value (instead of the other way around)
    });
    document.body.append(slider); // add the slider to the page
}

function nextGeneration() {
    // each time the timer expires, we get a call here
    matrixGOL = computeNextGeneration(); // first we RECOMPUTE all the values of the matrix
    for (let i = 0; i < numRows; i++) for (let j = 0; j < numCols; j++) refreshCell(i, j); // then we redisplay it
    if (gameIsRunning) setTimeout(nextGeneration, gameSpeed);
    // IF the game is still running - set a NEW timer, to call back here again
}

function computeNextGeneration() {
    // compute the new generation of living cells according to the game of life rules:
    /*
    https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    */
    let newGeneration = []; // we create a completely new matrix
    for (let i = 0; i < numRows; i++) {
        // for each new row
        let newRow = []; // create it
        for (let j = 0; j < numCols; j++) {
            // for each new column
            let surroundingLivingCells = 0; // compute the surrounding living cells
            // look around the i,j cell -> asking the function isLivingAt(x,y) if that cell is living (1)
            surroundingLivingCells += isLivingAt(i - 1, j - 1);
            // if it is, add it to the number of living surrounding cells
            // (if its 0 - its dead... so there will be no change)
            surroundingLivingCells += isLivingAt(i - 1, j);
            surroundingLivingCells += isLivingAt(i - 1, j + 1);
            surroundingLivingCells += isLivingAt(i, j - 1);
            surroundingLivingCells += isLivingAt(i, j + 1);
            surroundingLivingCells += isLivingAt(i + 1, j - 1);
            surroundingLivingCells += isLivingAt(i + 1, j);
            surroundingLivingCells += isLivingAt(i + 1, j + 1);
            // now compute the new value, using the rules:
            /*
            1. Any live cell with two or three live neighbours survives.
            2. Any dead cell with three live neighbours becomes a live cell.
            
            3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
            */
            let newVal = 0; // assume is dead - case 3
            if (matrixGOL[i][j] == 1) {
                // if it was alive
                if (surroundingLivingCells == 2 || surroundingLivingCells == 3) newVal = 1; // case 1
            } else if (surroundingLivingCells == 3) newVal = 1; // case 2
            newRow.push(newVal); // ok, this is the new value
        }
        newGeneration.push(newRow); // add the newly computed row to the next generation matrix
    }
    return newGeneration; // throw out the computed new generation matrix as an answer
}

function isLivingAt(row, col) {
    // this function checks if a cell is living at row,col
    // BUT BEFORE accessing the matrixGOL[row][col] we need to check if the row and col are actually VALID values
    // if row is smaller than 0 -> we're out of our matrix
    // same for row>=numRows...
    // same for col
    if (row >= 0 && row < numRows && col >= 0 && col < numCols) return matrixGOL[row][col];

    return 0; // this is the safe exit -> if we're out the matrix -> just throw a "dead cell" answer !
}

function refreshCell(row, column) {
    // refresh the cell on the page
    let divCell = document.getElementById("Cell" + row + column); // get the html div
    if (matrixGOL[row][column] == 1) divCell.classList.add("colored");
    // if the cell is alive -> color it
    else divCell.classList.remove("colored"); // or make it empty if its dead !
}
