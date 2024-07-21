function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(480,430);
    canvas.position(650,70);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on("pose", gotPoses);
}
leftWristX = 0;
rightWristX = 0;
difference = 0;
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);
    }
}

function modelloaded(){
    console.log("PoseNet is initialized.");
}

function draw(){
    background("#a3a3a3");
    textSize(difference);
    fill("black");
    text("Vihaan Jain", 100, 200);
}