function ComputeSum() {
    newRow = "<tr>";
    let fromNumber = document.getElementById("fromValue").value
    fromNumber = Number(fromNumber);

    newRow += "<td>" + fromNumber + "</td>";

    let upToNumber = document.getElementById("toValue").value;
    upToNumber = Number(upToNumber);

    newRow += "<td>" + upToNumber + "</td>";

    let computedSum = 0;
    for (let i = fromNumber; i <= upToNumber; i++) {
        computedSum += 1 / ((i + 1) * (i + 4));
    }

    newRow += "<td>" + computedSum + "<td>";

    newRow += "</tr>";

    document.getElementById("myOutputTable").innerHTML += newRow;


}
