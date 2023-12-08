export class Axis {
    constructor(width, height){
        this.width = width;
        this.height = height;

    }
    drawX(ctx){
        ctx.beginPath();
        ctx.moveTo(4, this.height-4);
        ctx.lineTo(this.width-4, this.height-4)
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 4;
        ctx.stroke();
    }
    drawY(ctx){
        ctx.beginPath();
        ctx.moveTo(4,4);
        ctx.lineTo(4, this.height-4);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}

