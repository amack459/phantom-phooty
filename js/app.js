

window.onload = function () {
  console.log("hello")
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
//if ball enters goal, player gets 1 point

var player           = document.getElementById('player');
var home             = document.getElementById('home');
var game             = document.getElementById('game')
var ball             = document.getElementById('ball');
var goal             = document.getElementById('goal')
var start            = 40; //43
var currentPosition  = parseInt(getComputedStyle(player).left);
var ballPosition     = parseInt(getComputedStyle(ball).left);
var end              = 220; //218
var shots             = 0;


// function newPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = game.height - 50;
//     var w = game.width - 50;

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

//ball moves toward goal 3 times 
function animateDiv(){
  shots++
  if(shots < 3) {

    var x = [0,100,200,50,25];
    var y = [150,250,0,0.5,2];

    var randX = x[Math.floor(Math.random() * x.length)];
    var randY = y[Math.floor(Math.random() * y.length)];

    var ballPositionX = randX;
    var ballPositionY = randY;
    console.log(currentPosition);  
    var id = setInterval(frame, 10);
   
    function frame() {
      if (ballPositionX == 170 || ballPositionY == 240) {
        clearInterval(id);
      } else {
        ballPositionX++;
        ballPositionY++;
        console.log("Y = " + ballPositionY);
        console.log("X = " + ballPositionX);
        ball.style.top =  ballPositionY + 'px';
        ball.style.left = ballPositionX + 'px';
      }
    }
  } 

   
    
};

// function calcSpeed(prev, next) {
    
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
    
//     var greatest = x > y ? x : y;
    
//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest/speedModifier);

//     return speed;
// }


//player can move right and left
function moveRight(){
if(currentPosition < end) {
  console.log("move right");
  console.log(currentPosition);
    player.style.left = currentPosition + 5 + 'px';
  }
}

function moveLeft(){
if(currentPosition > start) {
  console.log("move left");
  console.log(currentPosition);
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
  moveLeft();
  break;
  case 39: 
  moveRight();
  break;
}

})