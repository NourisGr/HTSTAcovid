function Do() {
    var numOfRows = document.getElementById("rows").value;
    var numOfColumns = document.getElementById("columns").value;
    let myTable = document.createElement("table")
    for (let i = 0; i < numOfRows; i++) {
        let newrow = document.createElement("tr");
        myTable.append(newrow);
        for (let f = 0; f < numOfColumns; f++) {
            let newCell = document.createElement("td");
            newrow.append(newCell);
        }
    
    }
    document.body.append(myTable);
}