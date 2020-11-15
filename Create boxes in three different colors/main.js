var count = 0;
var currentboxcolor = "boxcolor1";

function createbox() {
    count++;
    let addbox = '<div class="box ' + currentboxcolor + '">' + count + '</div>';
    document.getElementById("boxplace").innerHTML += addbox;
    if (currentboxcolor == "boxcolor1") {
        currentboxcolor = "boxcolor2"
    } else if (currentboxcolor == "boxcolor2") {
        currentboxcolor = "boxcolor3"
    } else if (currentboxcolor == "boxcolor3") {
        currentboxcolor = "boxcolor1"
    }
}