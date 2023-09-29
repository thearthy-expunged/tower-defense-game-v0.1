var archerAni, florestaimg, boardimg, arrowimg;
var archer, floresta, arrow;
var archers = [],
  arrows = [];
var shootingSpeed = 100;
var money = 50;
function preload() {
  archerAni = loadAnimation(
    "archer0.png",
    "archer1.png",
    "archer2.png",
    "archer3.png"
  );
  florestaimg = loadImage("floresta.png");
  boardimg = loadImage("board.png");
  arrowimg = loadImage("arrow-1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  floresta = createSprite(width / 2, height / 20 - height / 6, width, height);
  floresta.addImage(florestaimg);
  floresta.scale = 3;
  archer = createSprite(width / 5, height / 5);
  archer.addAnimation("archerANI", archerAni);
  archer.scale = 2;

  imageMode(CENTER);
}

function draw() {
  background(0, 255, 255);
  image(boardimg, width / 2, height / 1.35 + height / 20, width);
  drawSprites();
  if (frameCount % shootingSpeed == 0) {
    shooting();
    shootingSpeed -= 1;
  }
  for (var i = 0; i < arrows.length; i++) {
    if (arrows[i] >= width) {
      arrows[i].destroy;
    }
  }
  if (shootingSpeed <= 0) {
    shootingSpeed += 100;
  }
  textSize(50);
  text("money:" + money, 150, 150);
}
function mouseDragged() {
  archer.x = mouseX;
  archer.y = mouseY;
}
function shooting() {
  arrow = createSprite(archer.x, archer.y);
  arrow.addImage(arrowimg);
  arrow.scale = 2;
  arrow.velocityX += 5;
  arrows.push(arrow);
}
/*function mouseClicked() {
  if (money > 0) {
    money -= 1;
    shooting();
  }
}*/
