const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    fill("rgb(211, 40, 125)");
    textSize(45);
    text("Time(in hours): " + time, width/2 - 200,350)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Calcutta');

    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;

    // write code slice the datetime
    time = dateTime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(time >= 6 && time < 8){
        backgroundImg = loadImage("images/mojave_dynamic_2.jpeg")
    }
    if (time >= 8 && time < 9) {
        backgroundImg = loadImage("images/mojave_dynamic_3.jpeg")
    }
    if (time >= 9 && time < 10) {
        backgroundImg = loadImage("images/mojave_dynamic_4.jpeg")
    }
    if (time >= 10 && time < 11) {
        backgroundImg = loadImage("images/mojave_dynamic_5.jpeg")
    }
    if (time >= 11 && time < 12) {
        backgroundImg = loadImage("images/mojave_dynamic_6.jpeg")
    }
    if (time >= 12 && time < 13) {
        backgroundImg = loadImage("images/mojave_dynamic_7.jpeg")
    }
    if (time >= 13 && time < 14) {
        backgroundImg = loadImage("images/mojave_dynamic_8.jpeg")
    }
    if (time >= 14 && time < 15) {
        backgroundImg = loadImage("images/mojave_dynamic_9.jpeg")
    }
    if (time >= 15 && time < 16) {
        backgroundImg = loadImage("images/mojave_dynamic_10.jpeg")
    }
    if (time >= 16 && time < 17) {
        backgroundImg = loadImage("images/mojave_dynamic_11.jpeg")
    }
    if (time >= 17 && time < 19) {
        backgroundImg = loadImage("images/mojave_dynamic_12.jpeg")
    }
    if (time >= 19 && time < 21) {
        backgroundImg = loadImage("images/mojave_dynamic_13.jpeg")
    }
    if (time >= 21 && time <= 23) {
        backgroundImg = loadImage("images/mojave_dynamic_14.jpeg")
    }
    if (time >= 1 && time < 4) {
        backgroundImg = loadImage("images/mojave_dynamic_15.jpeg")
    }
    if (time >= 4 && time < 6) {
        backgroundImg = loadImage("images/mojave_dynamic_1.jpeg")
    }

}
