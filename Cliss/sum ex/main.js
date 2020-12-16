function ComputeSum() {
    newRow = "<tr>";
    let fromNumber = document.getElementById("fromValue").value
    fromNumber = Number(fromNumber);

    newRow += "<tb>" + fromNumber + "</tb>";

    let upToNumber = document.getElementById("toValue").value;
    upToNumber = Number(upToNumber);

    newRow += "<tb>" + upToNumber + "</tb>";

    let ComputerSum = 0;
    for (let i = fromNumber; i <= upToNumber; i++) {
        computedSum += 1 / ((i + 1) * (i + 4));
    }

    newRow += "<td>" + computedSum + "<td>";

    newRow += "</tr>";

    document.getElementById("myOutputTable").innerHTML += newRow;


}