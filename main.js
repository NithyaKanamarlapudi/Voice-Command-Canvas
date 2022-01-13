x=0
y=0
draw_apple=""
speak_data=""
to_number=""
screen_width=""
screen_height="";

var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload(){
    loadImage('apple.png');
}

function start(){
    document.getElementById("status").innerHTML="The System is Listening, Please Speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The System has Identified the Speech as: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML="Started Drawing Apple";
        draw_apple="set";
    }
    else{
        document.getElementById("status").innerHTML="The speech has not recongnized a number"
    }
}

function setup(){
    screen_width = window.innerWidth;
    screen_height= window.innerHeight;
    canvas = createCanvas(screen_width,screen_height-150);
    canvas.position()
}

function draw(){
    if (draw_apple=="set"){
    for (var i=1; i<=to_number; i++)
    {
        x= Math.floor(Math.random()*700);
        y= Math.floor(Math.random()*400);
        document.getElementById("status").innerHTML="Started drawing Apple";
        draw_circle="set";
        image();
        document.getElementById("status").innerHTML= to_number + "Apples Drawn"
        speak();
    }
    }
    if (draw_rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is Drawn";
        draw_rectangle=""
    }
}