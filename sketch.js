var factCard1, false1Img, false2Img, false3Img, false4Img, false5Img, false6Img;
var true1Img, true2Img, true3Img, true4Img, true5Img, true6Img;
var trueButton, falseButton, skip
var rand;
var button, i;
var score = 0;

function preload(){
false1Img = loadImage("images/false1.png");
false2Img = loadImage("images/false2.png");
false3Img = loadImage("images/false3.png");
false4Img = loadImage("images/false4.png");
false5Img = loadImage("images/false5.png");
false6Img = loadImage("images/false6.png");
true1Img = loadImage("images/true1.png");
true2Img = loadImage("images/true2.png");
true3Img = loadImage("images/true3.png");
true4Img = loadImage("images/true4.png");
true5Img = loadImage("images/true5.png");
true6Img = loadImage("images/true6.png");

}

function setup() {
  createCanvas(1300,800);
  factCard1 = createSprite(650, 400);
  factCard1.addImage(false1Img);
  factCard1.scale = 0.7;
  i = "f1";
  trueButton = createButton("True");
  falseButton = createButton("False");
  skip = createButton("Skip this card");

}

function draw() {
  background(0);  
  noStroke();
    textSize(25);
    fill("white");
    text("Use the correct buttons to categorize the fact cards", 300, 50);
    textSize(20);
    fill("white");
    text("score:"+score, 1150, 50);

    trueButton.position(400, 400);
    falseButton.position(860, 400);
    skip.position(650, 700);

    trueButton.mousePressed(function(){
      button = "trueButton";
    	rand = Math.round(random(1,11));
    	displayRandomImage();
      if (button === "trueButton" && ((i === "t1")||(i === "t2" )|| (i === "t3" ) || (i === "t4" ) || (i === "t5" ) || (i === "t6" ))) {
        score = score+5;
      }
      else{
        score = score-2;
      }
    });

    falseButton.mousePressed(function(){
      button = "falseButton";
    	rand = Math.round(random(1,5));
    	displayRandomImage();
      if (button === "falseButton" && ((i === "f1") || (i === "f2") || (i === "f3") || (i === "f4") || (i === "f5") || (i === "f6"))) {
        score = score+5;
      } else {score = score-2}
    });

    skip.mousePressed(function(){
    	rand = Math.round(random(1,5));
    	displayRandomImage();
    });

  
  drawSprites();
}

function displayRandomImage(){

  

	
    switch(rand) {
      case 1: factCard1.addImage(false2Img);
      factCard1.scale = 0.7;
      i = "f2";
              break;
      case 2: factCard1.addImage(false3Img);
      factCard1.scale = 0.7;
      i = "f3";
              break;
      case 3: factCard1.addImage(false4Img);
      factCard1.scale = 0.7;
      i = "f4";
              break;
      case 4: factCard1.addImage(false5Img);
      factCard1.scale = 0.7;
      i = "f5";
              break;
      case 5: factCard1.addImage(false6Img);
      factCard1.scale = 0.7;
      i = "f6";
              break;
      case 6: factCard1.addImage(true1Img);
      factCard1.scale = 0.7;
      i = "t1";
              break;
      case 7: factCard1.addImage(true2Img);
      factCard1.scale = 0.7;
      i = "t2";
              break;
              case 8: factCard1.addImage(true3Img);
      factCard1.scale = 0.7;
      i = "t3";
              break;
              case 9: factCard1.addImage(true4Img);
      factCard1.scale = 0.7;
      i = "t4";
              break;
              case 10: factCard1.addImage(true5Img);
      factCard1.scale = 0.7;
      i = "t5";
              break;
              case 11: factCard1.addImage(true6Img);
      factCard1.scale = 0.7;
      i = "t6";
              break;

      default: break;
    }
}