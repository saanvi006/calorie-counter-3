
var backgroundImage
var food 
var CalorieState 
var gameState = 0


function preload(){
backgroundImage = loadImage("background.jpeg")
}




function setup() {
  createCanvas(1500,700);

  database = firebase.database()
 
  if(gameState === 0){
    form = new Form()
  form.display();

  food = new Food()
  
  }
  
  

  

  
  
}

function draw() {
  background(backgroundImage); 
  
  if( CalorieState < 1200)
  text ("the meal is healthy!" , 150, 220 )

  drawSprites();
}