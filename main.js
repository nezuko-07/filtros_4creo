noseX = 0;
noseY = 0;
function preload(){
nariz = loadImage('https://i.postimg.cc/L4zDbfws/580b57fbd9996e24bc43bed5.png')
}

function setup(){
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);//es la funcion que nos ayuda a acceder a la camara
 video.size(300,300);
 video.hide();
 poseNet = ml5.poseNet(video,modelloaded);
 poseNet.on('pose',gotposes);
}

function draw(){

image(video,0,0,300,300);
//fill(34,0,255);//
//stroke(34,0,255);//
//circle(noseX,noseY,20 );//
image(nariz, noseX,noseY,20,20);    
}

function take_snapshot(){
save('foto.png');
}

function modelloaded(){
    console.log("poseNet esta inicializado");  
}

function gotposes(results)
 { if(results.length > 0)
     { console.log(results);
     noseX = results[0].pose.nose.x-10;
     noseY = results[0].pose.nose.y-15;

     } }