function drawSomething(x,y,win)
{
    var canvas =document.getElementById("myDrawing")
    var ctx = canvas.getContext("2d")

    if(win==1)
    {
        ctx.moveTo(x+100,y+0)
    ctx.lineTo(x+0,y+150)

    ctx.moveTo(x+100,y+0)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+0,y+150)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+0,y+150)
    ctx.lineTo(x+0,y+300)

    ctx.moveTo(x+0,y+300)
    ctx.lineTo(x+200,y+300)

    ctx.moveTo(x+200,y+300)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+80,y+300)
    ctx.lineTo(x+80,y+260)

    ctx.moveTo(x+120,y+300)
    ctx.lineTo(x+120,y+260)

    ctx.moveTo(x+120,y+260)
    ctx.lineTo(x+80,y+260)

    //window
    ctx.moveTo(x+150,y+250)
    ctx.lineTo(x+150,y+220)

    ctx.moveTo(x+150,y+220)
    ctx.lineTo(x+180,y+220)

    ctx.moveTo(x+180,y+220)
    ctx.lineTo(x+180,y+250)

    ctx.moveTo(x+180,250)
    ctx.lineTo(x+150,250)
    ctx.stroke()
    }
    else{
        ctx.moveTo(x+100,y+0)
    ctx.lineTo(x+0,y+150)

    ctx.moveTo(x+100,y+0)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+0,y+150)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+0,y+150)
    ctx.lineTo(x+0,y+300)

    ctx.moveTo(x+0,y+300)
    ctx.lineTo(x+200,y+300)

    ctx.moveTo(x+200,y+300)
    ctx.lineTo(x+200,y+150)

    ctx.moveTo(x+80,y+300)
    ctx.lineTo(x+80,y+260)

    ctx.moveTo(x+120,y+300)
    ctx.lineTo(x+120,y+260)

    ctx.moveTo(x+120,y+260)
    ctx.lineTo(x+80,y+260)
    ctx.stroke()
    }
}