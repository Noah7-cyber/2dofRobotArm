import { DegToRad } from "./util.js";
export class Manipulator1{
    constructor(height, ϴ1, l1){
        this.ϴ =ϴ1;
        this.l1 = l1;
        this.height = height;
        this.armx;
        this.army;
    }
    draw(ctx){
        
        ctx.beginPath();
        ctx.moveTo(4, this.height-4);
        this.armx = this.l1*Math.cos(DegToRad(this.ϴ));
        this.army =(this.l1*Math.sin(DegToRad(this.ϴ)));
        ctx.lineTo(this.armx, (this.height-4)-this.army);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
export class Manipulator2{
    constructor( height, ϴ1, ϴ2, l2){
        this.ϴ = ϴ1 +ϴ2;
        this.height = height;
        this.l2 = l2;
        this.armx;
        this.army;
    }
    draw(ctx,  arm1x, arm1y){
        ctx.beginPath();
        ctx.moveTo(arm1x, (this.height-4)-arm1y);
        this.armx =arm1x + (this.l2*Math.cos(DegToRad(this.ϴ)));
        this.army =(arm1y)+(this.l2*Math.sin(DegToRad(this.ϴ)));
        ctx.lineTo(this.armx, ((this.height-4)-this.army));
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
      
    }
}

