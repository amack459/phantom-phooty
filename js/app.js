

window.onload = function () {
  console.log("timelineloaded")
  var tl = new TimelineLite({paused: true})

  tl.to(".home", .8, {
       backgroundPosition: "-300px 0",
       ease: SteppedEase.config(11)
     });
     tl.set(".home", {
       backgroundPosition: "0 -300px"
     });
     tl.to(".home", .8, {
       backgroundPosition: "-300px -30px",
       ease: SteppedEase.config(11)
     });

  // tl.from((".home"), .6, { backgroundPosition: "center 43em" }, { backgroundPosition: "center -26em", ease:Linear.easeOutStepped }, 0)

}

window.addEventListener("keydown", function(e) {
//if ball enters goal, player loses 1 point
//if baall hits player, player gains 1 point
//only 3 shots


var player           = document.getElementById('player');
var home             = document.getElementsByClassName('home');
var field            = document.getElementById('game');
var ball             = document.getElementById('ball');
var goal             = document.getElementById('goal')
var start            = 40; //43
var currentPosition  = parseInt(getComputedStyle(player).left);
// var ballPosition     = parseInt(getComputedStyle(ball).left);
var end              = 220; //218
// var shots            = 0;
var x = field.offsetWidth - 150;
var y = field.offsetHeight - 150;
var randX = Math.floor(Math.random(x) * x);
var randY = Math.floor(Math.random(y) * y);
var ballPositionX = randX;
var ballPositionY = randY;

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
        paddleCollision()
      } else {
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

// paddle collision
function paddleCollision(){
  var points = 0;
  if((currentPosition -150) === ballPositionX || ballPositionY){
    points += 1;
    console.log("point scored")
    console.log(currentPosition + " = paddlecurrentPosition paddleCollision");
    // console.log(ballPositionX + " =ballPositionX paddleCollision");
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