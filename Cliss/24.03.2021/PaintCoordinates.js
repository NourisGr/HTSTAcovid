signalDrawing = false;
var x = 0;
var y = 0;
buttonState = false;

/*
function drawline(xstart,ystart,xend,yend)
{
    let mydrawing= document.getElementById("canvas");
    let ctx= mydrawing.getContext("2d");
    let canvaswidth= mydrawing.width;
    let canvasheight= mydrawing.height;

    ctx.moveTo(xstart+(canvaswidth/2),-ystart+(canvasheight/2));
    ctx.lineTo(xend+(canvaswidth/2),-yend+(canvasheight/2));
 
    ctx.moveTo(xstart+(canvaswidth/2),ystart+(canvasheight/2));
    ctx.lineTo(xend+(canvaswidth/2),yend+(canvasheight/2));
    ctx.stroke();
}
*/

function FirstDrawing()
{
    document.getElementById("canvas").addEventListener("mousedown", myMouseDown);
    document.getElementById("canvas").addEventListener("mouseup", stopDrawing);
    document.getElementById("canvas").addEventListener("mousemove", mouseMoving);
    document.getElementById("btn").addEventListener("click", NoDraw);
    document.getElementById("blackColorPick").addEventListener("click", blackChoice);
    document.getElementById("redColorPick").addEventListener("click", redChoice);
    document.getElementById("blueColorPick").addEventListener("click", blueChoice);
    document.getElementById("greenColorPick").addEventListener("click", greenChoice);


    /*
    drawline(20,20,100,100)
    drawline(-250,0,250,0)
    drawline(0,-250,0,250)
    myMouseDown(); //You need to write myMouseDown(); to CALL the function
    */
}

function resetAllBorders()
{
    document.getElementById("blackColorPick").style = "";
    document.getElementById("redColorPick").style = "";
    document.getElementById("blueColorPick").style = "";
    document.getElementById("greenColorPick").style = "";
}

function blackChoice()
{
    resetAllBorders()
    document.getElementById("blackColorPick").style = "border: solid 5px pink;";
}

function redChoice()
{
    resetAllBorders()
    document.getElementById("redColorPick").style = "border: solid 5px pink;";
}

function blueChoice()
{
    resetAllBorders()
    document.getElementById("blueColorPick").style = "border: solid 5px pink;";
}

function greenChoice()
{
    resetAllBorders()
    document.getElementById("greenColorPick").style = "border: solid 5px pink;";
}

function mouseMoving(e)
{
    if(signalDrawing == true)
    {
        //drawline(context, x, y, e.offsetX, e.offsetY);
        let mydrawing = document.getElementById("canvas");
        let ctx = mydrawing.getContext("2d");
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
        document.getElementById("btn").innerHTML = "Start drawing // D´Zeechnen aktivéieren // Commence à dessiner // Mit dem zeichnen beginnen";
    }
    else
    {
        document.getElementById("btn").innerHTML = "Stop drawing // D'Zeechnen blokéieren // Arrêter de dessiner // Zeichnen blockieren";
    }
    buttonState = !buttonState;
}