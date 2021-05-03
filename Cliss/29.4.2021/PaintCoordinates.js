var signalDrawing = false;
var buttonState = false;
var x = 0;
var y = 0;
var mycolorchoice = "black";
var myCanvasImageData;
var ctx;
var colors = ["black", "red", "yellow", "orange", "purple", "navy"];
function show() {
    var myNewImage = document.createElement("img");

    ctx = document.getElementById("mydrawing").getContext("2d");
    document.getElementById("mydrawing").addEventListener("mousedown", mouseDown)
    document.getElementById("mydrawing").addEventListener("mouseup", mouseUp)
    document.getElementById("mydrawing").addEventListener("mousemove", mouseMove)
    document.getElementById("myButton").addEventListener("click", btnClick)
    for (currentcolor of colors) {
        let newcolor = document.createElement("div");
        newcolor.classList.add("box");
        newcolor.style.backgroundColor = currentcolor;
        newcolor.id = "pickedcolor" + currentcolor;
        document.getElementById("startingdiv").append(newcolor);
        let myfunctioncall = Somecolorwaspicked.bind(null, currentcolor);
        newcolor.addEventListener("click", myfunctioncall);
    }

}
function Somecolorwaspicked(pickedcolor) {
    mycolorchoice = pickedcolor;
    document.getElementById("optiontoolcolors").style.backgroundColor = pickedcolor;
}
function btnClick() {
    if (!buttonState) {
        document.getElementById("myButton").innerHTML = "Start drawing";
    }
    else {
        document.getElementById("myButton").innerHTML = "Stop drawing";
    }
    buttonState = !buttonState;
}
function mouseMove(e) {
    if (signalDrawing) {
        ctx.putImageData(myCanvasImageData, 0, 0);
        ctx.beginPath()
        ctx.strokeStyle = mycolorchoice;

        ctx.rect(x, y, e.offsetX - x, e.offsetY - y);
        ctx.stroke()
    }
}
function mouseDown(e) {
    if (e.which == 1) {
        if (!buttonState) {
            signalDrawing = true;
            x = e.offsetX;
            y = e.offsetY;
            var canvas = document.getElementById("mydrawing")
            var width = canvas.width
            var height = canvas.height
            myCanvasImageData = ctx.getImageData(0, 0, width, height)
        }
    }
}
function mouseUp(e) {
    if (e.which == 1) {
        signalDrawing = false;
    }
}