export class Claw {
    constructor(height){
            this.height = height;
    }
    draw(ctx, arm2x, arm2y){
         //rightside
        ctx.beginPath();   
        ctx.moveTo(arm2x, (this.height-4)-arm2y);
         let rightcly= (this.height-4)-arm2y;
        ctx.lineTo(arm2x-30, rightcly-10);
        ctx.stroke();
        ctx.beginPath();
         ctx.moveTo(arm2x-30, rightcly-10);
        ctx.lineTo(arm2x+10, rightcly-50);
        ctx.stroke();
         //center
           ctx.beginPath();
           ctx.moveTo(arm2x, (this.height-4)-arm2y);
           ctx.lineTo(arm2x+30, rightcly-30);
           ctx.stroke();
            //left
           ctx.beginPath();
           ctx.moveTo(arm2x, (this.height-4)-arm2y);
           ctx.lineTo(arm2x+30, rightcly+10);
           ctx.stroke();
           ctx.beginPath();
           ctx.moveTo(arm2x+30, rightcly+10);
           ctx.lineTo(arm2x+70, rightcly-30);
           ctx.stroke();
    }
}
