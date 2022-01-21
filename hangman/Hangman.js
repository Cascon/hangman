
let animation = [];
function setup() { // the setup function
  createCanvas(400,400)
  let frames = spritedata.frames;
  for(let i =0; i < frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
    animation.push(img);
  }

  console.log(animation);

}

function draw(){
  background("lightblue");



if(wrongGuess === 1){
  image(animation[0],52,341);
}

if(wrongGuess === 2){
  image(animation[0],52,341);
  image(animation[1],98,18);
}

if(wrongGuess === 3){
  image(animation[0],52,341);
  image(animation[1],98,18);
  image(animation[2],98,18);
}

if(wrongGuess === 4){
  image(animation[0],52,341);
  image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
}

if(wrongGuess === 5){
  image(animation[0],52,341);
   image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
}

if(wrongGuess === 6){
  image(animation[0],52,341);
   image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
  image(animation[5],263,183);
}

if(wrongGuess === 7){
  image(animation[0],52,341);
  image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
  image(animation[5],263,183);
  image(animation[6],203,201);
}

if(wrongGuess === 8){
  image(animation[0],52,341);
   image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
  image(animation[5],263,183);
  image(animation[6],203,201);
  image(animation[7],279,201);
}
if(wrongGuess === 9){
  image(animation[0],52,341);
  image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
  image(animation[5],263,183);
  image(animation[6],203,201);
  image(animation[7],279,201);
  image(animation[8],226,270);
}
if(wrongGuess === 10){
  image(animation[0],52,341);
  image(animation[1],98,18);
  image(animation[2],98,18);
  image(animation[3],98,34);
  image(animation[4],225,34);
  image(animation[5],263,183);
  image(animation[6],203,201);
  image(animation[7],279,201);
  image(animation[8],226,270);
  image(animation[9],271,270);
}

}
