

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
var shots            = 0;
var x = field.offsetWidth - 150;
var y = field.offsetHeight - 150;
var randX = Math.floor(Math.random(x) * x);
var randY = Math.floor(Math.random(y) * y);
var ballPositionX = randX;
var ballPositionY = randY;

console.log(player.offsetHeight);
console.log(player.offsetWidth);



// function newPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = game.height - 50;
//     var w = game.width - 50;

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
//     console.log(nw)
// }

// newPosition();

function threeShots() {
  shots++
  if(shots < 3){
    animateDiv()
    }else{
      console.log("game over")
    }
}

// // paddle collision
// function paddleCollision(){
//   var points = 0;

//   if(player.style.left === ballPositionX || ballPositionY){
//     points++
//     console.log("point scored")
//     console.log(ballPositionX);
//   }else if(player.style.left < ballPositionX || ballPositionY){
//     points--
//     console.log("point loss")
//   }
// }

//ball moves toward goal 3 times 
function animateDiv(){
    var x = field.offsetWidth - 150;
    var y = field.offsetHeight - 150;
    console.log("x = " + x);
    console.log("y = " + y);


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
      if (ballPositionX == 170 || ballPositionY == 240) {
        clearInterval(id);
        paddleCollision()
      } else {
        ballPositionX++;
        ballPositionY++;
        // console.log("Y = " + ballPositionY);
        // console.log("X = " + ballPositionX);
        ball.style.top =  ballPositionY + 'px';
        ball.style.left = ballPositionX + 'px';
      }
    }
  } 


// function calcSpeed(prev, next) {
    
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
    
//     var greatest = x > y ? x : y;
    
//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest/speedModifier);

//     return speed;
// }

// paddle collision
function paddleCollision(){
  var points = 0;
  
  if((currentPosition - 150) === ballPositionX){
    console.log("point scored")
    console.log(currentPosition + " =currentPosition paddleCollision");
    console.log(ballPositionX + " =ballPositionX paddleCollision");
    console.log(ballPositionY + " =ballPositionY paddleCollision");
    console.log("points = " + points)
    //75 = ballPositionY Max
  }else if(currentPosition < ballPositionX || ballPositionY){
    points--
    console.log("point loss")
    console.log("points = " + points)
  }else {
    console.log("game over!!!!")
  }

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
  console.log("move left");
  console.log(currentPosition + "= currentPosition");
    player.style.left = currentPosition - 5 + 'px';
  }
}

//add player, ball and goal once home becomes field
switch(e.keyCode) {
  case 32: 
    game.classList.remove('home');
    game.classList.add('field');
    player.setAttribute ("class", "show");
    ball.setAttribute ("class", "show");
    goal.setAttribute ("class", "show");
    animateDiv();
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

})