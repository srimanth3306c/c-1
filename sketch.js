class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("white");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  //computerPaddle
  var computerPaddle = new Paddle();
  computerPaddle.xPosition = 0; 
  computerPaddle.yPosition = 150;
  
  computerPaddle.display();
  //draw the ball
  var ball = new Ball(); 
  ball.xPosition = 200;
  ball.yPosition = 200;
  ball.display();
}