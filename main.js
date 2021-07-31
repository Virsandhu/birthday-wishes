var canvas = new fabric.Canvas('myCanvas');

var x= document.getElementById("idofAudio");

block_img_width= 30;
block_img_height= 30;

player_x = 10;
player_y = 10;




function add(){
    fabric.Image.fromURL('btimg.jpg',function(Img){
        blockImage=Img;
        blockImage.scaleToHeight(700);
        blockImage.scaleToWidth(510);
        blockImage.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(blockImage);
    })
}

function play(){
    x.play();
}