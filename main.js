function setup(){
canvas=createCanvas(350,350);
canvas.position(850,150);
video=createCapture(VIDEO);
video.size(350,350);
video.position(200,150);
posenet=ml5.poseNet(video,modalloaded);
posenet.on('pose',gotposes);
}
function modalloaded(){
console.log("posenet is insalized");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log(nose_x,nose_y);
    right_wrist_x=results[0].pose.rightWrist.x;
    left_wrist_x=results[0].pose.leftWrist.x;
    distance=floor(left_wrist_x-right_wrist_x);
}
}

function draw(){
    background('red');
fill("white");
stroke("orange");
background('red');
square(nose_x,nose_y,distance);
document.getElementById("squaresize").innerHTML="The length of the square is "+distance+" px ";
}
nose_x=0;
nose_y=0;
distance=0;
right_wrist_x=0;
left_wrist_x=0;

