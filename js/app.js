

window.onload = function () {
  console.log("PAGE LOADED")

  var animation = new TimelineMax({ repeat: -1})
   
   animation.set(".home",{autoAlpha:1});
   // animate CSS opacity to 1
   animation.to(".home",4,{autoAlpha:0.9})

  animation.to(".home",3.5, {
          backgroundPosition: "450px 0px",
          ease: Linear.easeNone}, 0);
}

window.addEventListener("keydown", function(e) {
//if ball enters goal, player loses 1 point
//if baall hits player, player gains 1 point
//if score equals 1,2 or 3 player wins
//if score equals 0 player ties
//if score equals -number player loses
//only 3 shots
console.log("EVENT LISTENER")


var player           = document.getElementById('player');
var home             = document.getElementsByClassName('home');
var field            = document.getElementById('game');
var ball             = document.getElementById('ball');
var goal             = document.getElementById('goal')
var start            = goal.offsetHeight
var currentPosition  = parseInt(getComputedStyle(player).left);
var end              = goal.offsetWidth 
var x = field.offsetWidth - 150;
var y = field.offsetHeight - 150;
var randX         = Math.floor(Math.random(x) * x);
var randY         = Math.floor(Math.random(y) * y);
var ballPositionX = randX;
var ballPositionY = randY;


// console.log(start)
// console.log(end)
// var ballPosition  = parseInt(getComputedStyle(ball).left);
// var shots            = 0;
// console.log(field.offsetWidth)
// console.log(player.offsetLeft)

// console.log(player.offsetWidth);


// parseInt(getComputedStyle(player).left)


//add player, ball and goal once home becomes field
switch(e.keyCode) {
  case 32: 
    game.classList.remove('home');
    game.classList.add('field');
    player.setAttribute ("class", "show");
    ball.setAttribute ("class", "show");
    goal.setAttribute ("class", "show");
    if(game.classList.contains('field') == true){
      threeShots();
    };
  break;
  case 37:
    if(game.classList.contains('field') == true){
      moveLeft();
    }
 
  break;
  case 39: 
    if(game.classList.contains('field') == true){
    moveRight();
  }
  break;
}


//player can move right and left
function moveRight(){
if(currentPosition < end) {
  console.log("move right");
  console.log(currentPosition + "= currentPosition");
    player.style.left = currentPosition + 5 + 'px';
  }
}

function moveLeft(){
if(currentPosition > start) {
  console.log("move left");
  console.log(currentPosition + "= currentPosition");
    player.style.left = currentPosition - 5 + 'px';
  }
}

//ball moves toward goal 3 times 
function animateDiv(){
    var x = field.offsetWidth - 150;
    var y = field.offsetHeight - 150;
    // console.log("x = " + x);
    // console.log("y = " + y);


    var randX = Math.floor(Math.random(x) * x);
    var randY = Math.floor(Math.random(y) * y);

    console.log(randX)
    console.log(randY)

    var ballPositionX = randX;
    var ballPositionY = randY;
    console.log(currentPosition);  
    var id = setInterval(frame, 10);
   console.log(id)
    function frame() {
      if (ballPositionX == field.offsetWidth-goal.offsetHeight || ballPositionY == field.offsetHeight-goal.offsetHeight) {
        clearInterval(id);
        console.log("paddle hit")
        paddleCollision()
      } else if (currentPosition === ballPositionX || ballPositionY) {
        ballPositionX ++;
        ballPositionY ++;
        // console.log("Y = " + ballPositionY);
        // console.log("X = " + ballPositionX);
        ball.style.top =  ballPositionY + 'px';
        ball.style.left = ballPositionX + 'px';
      }
    }
  } 


  function threeShots() {
    var shots = 0
    shots ++;
    console.log(shots)
    if(shots <= 3){
      animateDiv()
      }else{
        console.log("game over")
      }
  }

  function winner() {
    if(points == 1||2||3 && shots == 3) {
      console.log("winner, winner chicken dinner! Game Over")
    } else if (points == 0 && shots == 3){
      console.log("looks like a tie. Game Over")
    } else if (points == -1 || -2 || -3) {
      console.log("you need a bit more practice, mate. Game Over")
    }
  }

// paddle collision
function paddleCollision(){
  var points = 0;
  if(currentPosition === ballPositionX || ballPositionY){
    points += 1;
    console.log("point scored")
    console.log(currentPosition + " = paddlecurrentPosition paddleCollision");
    console.log(ballPositionX + " =ballPositionX paddleCollision");
    // console.log(ballPositionY + " =ballPositionY paddleCollision");
    console.log("points = " + points)
    //75 = ballPositionY Max
    return points
  }else if(currentPosition > ballPositionX){
    points -= 1;
    console.log("point loss")
    console.log(currentPosition + " = paddlecurrentPosition paddleCollision");
    console.log(ballPositionX + " =ballPositionX paddleCollision");
    console.log(ballPositionY + " =ballPositionY paddleCollision");
    console.log("points = " + points)
    return points
  }else {
    console.log("game over!!!!")
  }
  }
})