signalDrawing = false;
var x = 0;
var y = 0;
buttonState = false;
var myColorChoice = "black";
var colors=["black","red","orange","pink","yellow"];

function FirstDrawing()
{
    document.getElementById("canvas").addEventListener("mousedown", myMouseDown);
    document.getElementById("canvas").addEventListener("mouseup", stopDrawing);
    document.getElementById("canvas").addEventListener("mousemove", mouseMoving);
    document.getElementById("btn").addEventListener("click", NoDraw);

    for(curentcolor of colors){
        let newcolor = document.createElement("div");
        newcolor.classList.add("box");
        newcolor.style = "background-color:" + curentcolor;
        newcolor.id = "colorpick" + curentcolor;
        document.body.append(newcolor);
        let myFunctionCall = SomeColorChanges.bind(null, curentcolor);
        newcolor.addEventListener("click", myFunctionCall);
    }

    /*let myBlackFunctionCall = SomeColorChanges.bind(null, "black");
    document.getElementById("blackColorPick").addEventListener("click", myBlackFunctionCall);
    let myRedFunctionCall = SomeColorChanges.bind(null, "red");
    document.getElementById("redColorPick").addEventListener("click", myRedFunctionCall);
    let myBlueFunctionCall = SomeColorChanges.bind(null, "blue");
    document.getElementById("blueColorPick").addEventListener("click", myBlueFunctionCall);
    let myGreenFunctionCall = SomeColorChanges.bind(null, "green");
    document.getElementById("greenColorPick").addEventListener("click", myGreenFunctionCall);*/



}

function SomeColorChanges(pickedColor)
{
    myColorChoice = pickedColor;
    resetAllBorders()
    document.getElementById(pickedColor + "ColorPick").style = "border: solid 5px pink;";
}

function resetAllBorders()
{
    document.getElementById("blackColorPick").style = "";
    document.getElementById("redColorPick").style = "";
    document.getElementById("blueColorPick").style = "";
    document.getElementById("greenColorPick").style = "";
}


function mouseMoving(e)
{
    if(signalDrawing == true)
    {
        //drawline(context, x, y, e.offsetX, e.offsetY);
        let mydrawing = document.getElementById("canvas");
        let ctx = mydrawing.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = myColorChoice;
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
        ctx.stroke();
    }
    document.getElementById("xCoord").innerHTML = x;
    document.getElementById("yCoord").innerHTML = y;
}

function stopDrawing(e)
{
    if(e.which==1)
    {
        signalDrawing = false;
    }
}

function myMouseDown(e)
{
    if(e.which==1)
    {
        if(!buttonState)
        {
            signalDrawing = true;
            x = e.offsetX;
            y = e.offsetY;
            //alert("Left mouse button down")
        }
    }
}

function NoDraw()
{
    if(!buttonState)
    {
        document.getElementById("btn").innerHTML = "Start drawing";
    }
    else
    {
        document.getElementById("btn").innerHTML = "Stop drawing";
    }
    buttonState = !buttonState;
}