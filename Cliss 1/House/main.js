function drawline() {
    let c = document.getElementById("myCanvas");

    let ctx = c.getContext("2d");
    //Roof
    ctx.moveTo(0, 100);
    ctx.lineTo(150, 0);
    ctx.stroke();

    ctx.moveTo(300, 100);
    ctx.lineTo(150, 0);
    ctx.stroke();

    ctx.moveTo(0, 100 );
    ctx.lineTo(300, 100);
    ctx.stroke();
    
    //door
    ctx.moveTo(135, 300);
    ctx.lineTo(135, 250);
    ctx.stroke();

    ctx.moveTo(135, 250);
    ctx.lineTo(170, 250 );
    ctx.stroke();

    ctx.moveTo(170, 250);
    ctx.lineTo(170, 300);
    ctx.stroke();

    //window 
    ctx.moveTo(230, 150);
    ctx.lineTo(230, 180);
    ctx.stroke();

    ctx.moveTo(230, 150);
    ctx.lineTo(265, 150);
    ctx.stroke();

    ctx.moveTo(230, 180);
    ctx.lineTo(265, 180);
    ctx.stroke();

    ctx.moveTo(265, 180);
    ctx.lineTo(265, 150);
    ctx.stroke();

}
