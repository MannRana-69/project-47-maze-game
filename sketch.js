var img_fire
var img_coin 
var boundry, block2, block3, boundry2
var sprite_img

function preload() {
  sprite_img = loadImage("assets/ball.png")
  img_fire = loadImage("assets/fire.png");
  img_coin = loadImage("assets/goldCoin.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boundry = createSprite(0,0,3400,100)
  block2 = createSprite(72,55,10,400)
  block3 = createSprite(270,253,400,10)
  boundry2 = createSprite(8,810,3400,100)
  block4 = createSprite(72,753,10,400)
  block5 = createSprite(423,681,700,10)
  block6 = createSprite(257,573,10,300)
  block7 = createSprite(467,399,10,300)
  block8 = createSprite(715,408,500,10)
  block10  = createSprite(966,402,600,20)
  block11 = createSprite(966,681,600,20)
  block12 = createSprite(1260,460,10,100)
  block13 = createSprite(1260,633,10,100)
  block14 = createSprite(1261,505,100,10)
  block15 = createSprite(1291,580,120,10)
  block16 = createSprite(1301,407,10,200)
  block17 = createSprite(1347,413,10,350)
  block18 = createSprite(1149,238,400,10)
  block19 = createSprite(1080,310,450,10)
  block20 = createSprite(850,220,10,200)
  block21 = createSprite(1102,115,570,10)
  block22 = createSprite(1486,151,10,400)
  block22.rotation-=70
  block23 = createSprite(1348,238,400,10)
  block24 = createSprite(1548,435,10,400)
  block25 = createSprite(1668,422,10,400)
  block26 = createSprite(1404,651,320,10)
  block26.rotation-=10
  block27 = createSprite(1525,680,350,10)
  block27.rotation-=23
  sprite = createSprite(26,88)
  sprite.addImage(sprite_img)
  sprite.scale = 0.2857
}

function draw() {
background("white");
text(mouseX + ':' + mouseY, mouseX, mouseY)
  drawSprites();
  sprite.x = mouseX
  sprite.y = mouseY


}



