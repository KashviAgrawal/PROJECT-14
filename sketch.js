var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;


function preload(){
  satelitteImg=loadImage("other/satellite.png");
  groundStationLeftImg=loadImage("other/gstation1.png");
  groundStationRightImg=loadImage("other/gstation2.png");
  earthImg=loadAnimation("other/earth1.png","other/earth2.png",
                        "other/earth3.png","other/earth4.png",
                        "other/earth5.png");
  upLinkLeftImg=loadAnimation("leftu/upleft1.png","leftu/upleft2.png",
"leftu/upleft3.png","leftu/upleft4.png","leftu/upleft5.png",
"leftu/upleft6.png","leftu/upleft7.png","leftu/upleft8.png")

downLinkLeftImg=loadAnimation("leftd/dleft1.png","leftd/dleft2.png",
"leftd/dleft3.png","leftd/dleft4.png","leftd/dleft5.png",
"leftd/dleft6.png","leftd/dleft7.png","leftd/dleft8.png")
  
  downLinkRightImg=loadAnimation("rightd/dright1.png","rightd/dright2.png",
"rightd/dright3.png","rightd/dright4.png","rightd/dright5.png",
"rightd/dright6.png","rightd/dright7.png","rightd/dright8.png")
  
  upLinkRightImg=loadAnimation("rightu/upright1.png","rightu/upright2.png",
"rightu/upright3.png","rightu/upright4.png","rightu/upright5.png",
"rightu/upright6.png","rightu/upright7.png","rightu/upright8.png")
}
function setup(){
  createCanvas(700,500);
  earth=createSprite(350,750,30,30);
  earth.addAnimation("earth",earthImg)
  earth.scale=0.5
  
  satelitte=createSprite(350,60,10,10);
  satelitte.addAnimation("satelitte",satelitteImg)
  satelitte.scale=0.06
  
  groundStationLeft=createSprite(120,430,10,10);
  groundStationLeft.addAnimation("groundStationLeft",groundStationLeftImg)
  groundStationLeft.scale=0.04
  
  groundStationRight=createSprite(580,430,10,10);
  groundStationRight.addAnimation("groundStationRight",groundStationRightImg)
  groundStationRight.scale=0.04
  
  upLinkLeft= createSprite(240,235,10,100);
  upLinkLeft.addAnimation("upLinkLeft",upLinkLeftImg)
  upLinkLeft.scale=0.07
  
  upLinkRight= createSprite(470,235,10,100);
  upLinkRight.addAnimation("upLinkRight",upLinkRightImg)
  upLinkRight.scale=0.07
  
  downLinkLeft= createSprite(240,235,10,100);
  downLinkLeft.addAnimation("downLinkLeft",downLinkLeftImg)
  downLinkLeft.scale=0.07
  
  downLinkRight= createSprite(470,235,10,100);
  downLinkRight.addAnimation("downLinkRight",downLinkRightImg)
  downLinkRight.scale=0.07
}

function draw(){
  background("black")
  
  downLinkRight.visible= false
  downLinkLeft.visible= false
  
  if(keyDown("L")){
    upLinkLeft.visible=true
  }
  
  if(keyDown("R")){
    upLinkRight.visible=true
  }
  
  if(keyDown("LEFT_ARROW")){
    downLinkLeft.visible=true
  }
  
  if(keyDown("RIGHT_ARROW")){
    downLinkRight.visible=true
  }
  
  drawSprites();
  textSize(15);
  fill("White")
  if(keyDown("L")){
    text("Requesting data from satellite",10,300)
  }
  
  if(keyDown("R")){
    text("Requesting data from satellite",300,300)
  }
  
  if(keyDown("LEFT_ARROW")){
    text("Transferring data to left base station",10,300)
  }
  
  if(keyDown("RIGHT_ARROW")){
    text("Transferring data to right base station",490,300)
  }
  
  textSize(15);
  fill("White")
  text ("Press L & R keys-to request data from satellite",20,50)
  text("Press Left and Right arrow keys to recieve data", 20,65 )
}