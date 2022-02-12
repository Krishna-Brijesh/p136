status = "";


function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function draw(){
    image(video, 0,0, 480, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects ";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("model Loaded!");
    status = true;
}