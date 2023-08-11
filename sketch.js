let imgMars
let imgSpace
let unitsX = 0
let unitsY = 60
let unitsSpaceY = 100
let unitsSpaceX = 0
let frames = 155

function setup() {
  createCanvas(600, 600, WEBGL);
  imgMars = loadImage("/mercury.jpg");
  imgSpace = loadImage("/space.jpg")
}

function keyPressed() {
  if (key === 's') {

    saveGif('marsSketch', 4);
  }
}

function draw() {
  background(0);

  //Animates rotation background photo of space
  // unitsSpaceY -= .05
  unitsSpaceX -= .01
  rotateY(radians(unitsSpaceY))
  rotateX(radians(unitsSpaceX))

  image(imgSpace, -500, -500, 1200, 1400)
  texture(imgMars)

  //Animates rotation of planet
  unitsX += .5
  rotateX(radians(unitsX))
  rotateY(radians(unitsY))

  // pointLight(255, 255, 255, 218, -200, 500)
  // pointLight(255, 255, 255, 0, 400, 0)
  pointLight(255, 255, 255, 0, -400, 700)
  pointLight(255, 255, 255, 0, -400, 0)
 

  noStroke()
  sphere(120);
}