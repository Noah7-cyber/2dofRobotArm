import { Manipulator1, Manipulator2 } from "./manipulatorArm.js";
import { DegToRad } from "./util.js";
import { Axis } from "./axis.js";
import { Claw } from "./claw.js";
import { lerp } from "./util.js";
let l1 = document.querySelector('#l1');
let ϴ1 = document.getElementById('ϴ1');
let ϴ2 = document.getElementById('ϴ2');
let l2 = document.getElementById('l2');
const robotCanvas = document.getElementById('robotCanvas');

const axisW = robotCanvas.width = 600;
const axisH =robotCanvas.height =600;
const solve = document.querySelector('#visualize')

const robotctx = robotCanvas.getContext('2d');
const axis = new Axis(axisW, axisH);
solve.addEventListener('click', solvei);
axis.drawX(robotctx);
axis.drawY(robotctx);

        
function solvei() {
    let li = parseFloat(l1.value);
    let ϴi = parseFloat(ϴ1.value);
    let ϴf = parseFloat(ϴ2.value);
    let lf = parseFloat(l2.value);
   
    robotctx.clearRect(0, 0, robotCanvas.width, robotCanvas.height);
    axis.drawX(robotctx);
    axis.drawY(robotctx);
    const arm1 = new Manipulator1(axisH, ϴi, li);
    const arm2 = new Manipulator2(axisH, ϴi, ϴf,lf );
    const claw = new Claw(axisH)
    arm1.draw(robotctx);
    console.log(arm1);
    arm2.draw(robotctx, arm1.armx, arm1.army);
    claw.draw(robotctx, arm2.armx, arm2.army)
    console.log(arm2);
      requestAnimationFrame(solvei);
    
}

    function animate(){
        let li = l1.value;
        let ϴi = ϴ1.value;
        if((li=="") && (ϴi== "")){
          // // Manipulator Arm 1
            robotctx.beginPath();
            robotctx.moveTo(4, axisH-4);
            let angle1 = 30;
            let arm1x = 100*Math.cos(DegToRad(angle1));
            let arm1y =(100*Math.sin(DegToRad(angle1)));
            robotctx.lineTo(arm1x, (axisH-4)-arm1y);
            robotctx.strokeStyle = "black";
            robotctx.lineWidth = 2;
            robotctx.stroke();
            //test line
            robotctx.beginPath()
            robotctx.moveTo(arm1x, (axisH-4)-arm1y)
            robotctx.setLineDash([2,3]);
            robotctx.lineTo(lerp(4, arm1x, 3), lerp(axisH-4, (axisH-4)-arm1y, 3));
            robotctx.stroke();
            robotctx.setLineDash([])
            // // //Manipulator Arm 2
            robotctx.beginPath();
            robotctx.moveTo(arm1x, (axisH-4)-arm1y);
            let ϴ3 = 40;
            let angle2 = angle1+ϴ3;
            let arm2x =arm1x + (100*Math.cos(DegToRad(angle2)));
            let arm2y =(arm1y)+(100*Math.sin(DegToRad(angle2)));
            robotctx.lineTo(arm2x, (axisH-4)-arm2y);
            robotctx.stroke();
            //perpendicular visual
            robotctx.beginPath();
            robotctx.moveTo(arm1x, axisH-4-arm1y);
            robotctx.lineTo(axisW-arm1x-4, axisH-4-arm1y);
            robotctx.setLineDash([2,3]);
            robotctx.stroke();
            robotctx.setLineDash([])
            robotctx.beginPath();
            
            
            robotctx.arc(arm1x, (axisH-4)-arm1y, 20, DegToRad(360-angle2), 0)
            
            
         
            robotctx.stroke();
            //move 9.3, 
        //     //Claw
            robotctx.beginPath();
        //     //rightside
            robotctx.moveTo(arm2x, (axisH-4)-arm2y);
            let rightcly= (axisH-4)-arm2y;
            robotctx.lineTo(arm2x-30, rightcly-10);
            robotctx.stroke();
           robotctx.beginPath();
           robotctx.moveTo(arm2x-30, rightcly-10);
           robotctx.lineTo(arm2x+10, rightcly-50);
           robotctx.stroke();
        //    //center
           robotctx.beginPath();
           robotctx.moveTo(arm2x, (axisH-4)-arm2y);
           robotctx.lineTo(arm2x+30, rightcly-30);
           robotctx.stroke();
        //    //left
           robotctx.beginPath();
           robotctx.moveTo(arm2x, (axisH-4)-arm2y);
           robotctx.lineTo(arm2x+30, rightcly+10);
           robotctx.stroke();
           robotctx.beginPath();
           robotctx.moveTo(arm2x+30, rightcly+10);
           robotctx.lineTo(arm2x+70, rightcly-30);
           robotctx.stroke();
           
        }
        requestAnimationFrame(animate);
    }
   
// animate();


