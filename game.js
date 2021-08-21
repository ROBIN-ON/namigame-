var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var score = 0;
var fps;






// // score area

// function text (txt , fnt , x, y, c){
// 	context.fillStyle = c ;
// 	context.font = fnt ;
// 	context.fillText(txt, x, y
// 	);
// }
// // '30px Arial

// function draw (){
// 	text('score: ' + Math.floor(score), '30px Comic Sans MS',10,30,'black' );
// }
//  function update {
// 	 score += 1/fps;

//  }
 




 

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}


function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);










//  to hide start
var begin= document.getElementsByClassName('start');
begin[0].addEventListener('click',start);

function start(){
	var start=document.getElementsByClassName('start');
	start[0].style.display= 'none';
	create =setInterval(bomb, 500);
	down =setInterval(drop,50);
	explode()
}

document.addEventListener('DOMContentLoad', myLoadFunction);


// creating bomb

element = document.getElementsByClassName('bomb');
var element = document.createElement('div');
var bomb = Math.floor (Math.random()*ScreenWidth);
element. className = 'bomb';
document.body.appendChild(element);



//droping  bomb part

function drop(){
	element = document.getElementsByClassName('bomb');
	for (var i =0;i<element.length;i++){
		element[i];
		var postTop=element[i].offsetTop;
		element[i].style.top=postTop + 5 +'px';
	}
}


