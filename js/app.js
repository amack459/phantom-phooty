

window.onload = function () {
 console.log("spacebar = start and shoot | left arrow = goalie left | right arrow = goalie right")

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



//add player, ball and goal once home becomes field
switch(e.keyCode) {
  case 32: 
    game.classList.remove('home');
    game.classList.add('field');
    player.setAttribute ("class", "show");
    ball.setAttribute ("class", "show");
    goal.setAttribute ("class", "show");
    if(game.classList.contains('field') == true){
      startGame();
      
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


//player can move right
function moveRight(){
if(currentPosition < end) {
  paddleCollision()
    player.style.left = currentPosition + 5 + 'px';
  }
}

//player can move left
function moveLeft(){
if(currentPosition > start) {
  paddleCollision()
    player.style.left = currentPosition - 5 + 'px';
  }
}

//ball moves toward goal 3 times 
function startGame(){
    var x = field.offsetWidth - 150;
    var y = field.offsetHeight - 150;

    var randX = Math.floor(Math.random(x) * x);
    var randY = Math.floor(Math.random(y) * y);

    var ballPositionX = randX;
    var ballPositionY = randY; 
    var id = setInterval(frame, 10);

    function frame() {

      if (ballPositionX == field.offsetWidth-goal.offsetHeight || ballPositionY == field.offsetHeight-goal.offsetHeight) {
        clearInterval(id);
      } else if (currentPosition === ballPositionX || ballPositionY) {
        ballPositionX ++;
        ballPositionY ++;
        ball.style.top =  ballPositionY + 'px';
        ball.style.left = ballPositionX + 'px';
      }
      paddleCollision();
      threeShots();
    }
  } 


  function threeShots() {
    var shots = 0
  for (shots=1; shots <= 3; shots++){
    if(shots <= 3){
      // shots ++;
      console.log("shot # " + shots) 
    }else if (shots = 3){
      winner()
        console.log("game over")
    }
  }
}

  var points = 0;

  function winner() { 
    var points

    if(points === 1||2||3 && shots === 3) {
      console.log(points)
      console.log("winner, winner chicken dinner! Game Over")
    } else if (points === 0 && shots === 3){
      console.log("looks like a tie. Game Over")
    } else if (points === -1 || -2 || -3 && shots === 3) {
      console.log("you need a bit more practice, mate. Game Over")
    }
  }

// paddle collision
function paddleCollision(){
  if(currentPosition === ballPositionX || ballPositionY){
    points += 1;
    console.log("point scored")
    console.log("points = " + points)
    //75 = ballPositionY Max
    return points
  }else if(currentPosition > ballPositionX || ballPositionY){
    points -= 1;
    console.log("point loss")
    console.log("points = " + points)
    return points
  }else {
    console.log("0 points scored")
  }
  }
})