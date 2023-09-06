function setup() {
    createCanvas(900, 900);
    background("cyan");
  }
  
  function draw() {
    
    stroke("red");
    
    fill("salmon");
    
    if(mouseIsPressed) { 
      
    rect(mouseX, mouseY, 40, 40, 40);
    }
  }