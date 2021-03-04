function drawhouse(x, y) {
    let c = document.getElementById("myCanvas");

    let ctx = c.getContext("2d");

    //Roof
    ctx.moveTo(0+ x, 100+ y);
    ctx.lineTo(150+  x, 0+ y);
    ctx.stroke();

    ctx.moveTo(300+ x,  100+ y);
    ctx.lineTo(150+ x, 0+ y);
    ctx.stroke();

    ctx.moveTo(0+ x, 100+ y);
    ctx.lineTo(300+ x, 100+ y);
    ctx.stroke();

    //door
    ctx.moveTo(135+ x, 300+ y);
    ctx.lineTo(135+ x, 250+ y);
    ctx.stroke();

    ctx.moveTo(135+ x, 250+ y);
    ctx.lineTo(170+ x, 250+ y);
    ctx.stroke();

    ctx.moveTo(170+ x, 250+ y);
    ctx.lineTo(170+ x, 300+ y);
    ctx.stroke();

    //walls
    ctx.moveTo(0+ x, 100+ y);
    ctx.lineTo(0+ x, 300+ y);
    ctx.stroke();

    ctx.moveTo(300+ x, 100+ y);
    ctx.lineTo(300+ x, 300+ y);
    ctx.stroke();

    ctx.moveTo(300+ x, 300+ y);
    ctx.lineTo(0+ x, 300+ y);
    ctx.stroke();
    
    if (window == true) {

        //window 
        ctx.moveTo(230+ x, 150+ y);
        ctx.lineTo(230+ x, 180+ y);
        ctx.stroke();

        ctx.moveTo(230+ x, 150+ y);
        ctx.lineTo(265+ x, 150+ y);
        ctx.stroke();

        ctx.moveTo(230+ x, 180+ y);
        ctx.lineTo(265+ x, 180+ y);
        ctx.stroke();

        ctx.moveTo(265+ x, 180+ y);
        ctx.lineTo(265+ x, 150+ y);
        ctx.stroke();

    }
}

function drawline(x, y, lenght) {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d")
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + lenght);
    ctx.stroke();
}