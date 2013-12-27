//Constructor for PlayerObjs


function PlayerObj(x, y, width, height) {
	this.x = x;
	this.y = y;

	this.height = height;
	this.width = width;

	this.maxX = x + width;
	this.maxY = y + height;
	

	this.dx = 0;
	this.dy = 0;

	this.left = false;
	this.right = false;
	this.up = false;

	this.falling = true;
	this.leftBlocked = false;
	this.rightBlocked = false;

	this.jump = false;
}

//Our draw function. Takes a sprite
PlayerObj.prototype.draw = function(sprite) {	
	playerCtx.clearRect(0, 0, 400, 400);
	playerCtx.fillStyle = "#003b6f";
	playerCtx.fillRect(this.x, this.y, this.width, this.height);
}

//The Update function of our player. eg: The Brains.
PlayerObj.prototype.update = function() {
	this.draw();
	this.physics();
}

PlayerObj.prototype.physics = function() {
	//Update the postion of PlayerObj

	wasleft = this.dx < 0;
	wasright = this.dx > 0;

	if (this.falling === true) {
		this.dy += GRAVITY;
	}

	if ((this.up) && this.jump) {
		this.dy -= GRAVITY * 15;
		this.falling = true;
		this.jump = false;
	}

	this.y += this.dy;
	this.y = Math.floor(this.y);
	this.maxY = this.y + this.height;

	if (this.y % TILE_HEIGHT != 0) {
		this.y -= 1;
	}

	if ((this.right) && (this.rightBlocked === false)) {
		this.dx -= this.dx - ACCEL;
	}


	if ((this.left) && (this.leftBlocked === false)) {
		if (this.rightBlocked === true) {
			
		}
		this.dx -= this.dx + ACCEL;
	}

	if ((wasright) && (this.dx > 0)) {
		this.dx -= 1;
	}

	if (this.dx < 0) {
		this.dx += 1;
	}

	this.x += this.dx;
	this.x = Math.floor(this.x);
	this.maxX = this.x + this.width;

	this.falling = true;
	this.rightBlocked = false;
	this.leftBlocked = false;

	// var wasleft = this.dx < 0,
	// 	wasright = this.dx > 0;

	// this.ddx = 0;


	// //Keep track of lower right corner
	// this.maxX = this.x + this.width;
	// this.maxY = this.y + this.height;


	// if (this.left) {
	// 	this.ddx = this.ddx - ACCEL;
	// }
	// else if (wasleft) {
	// 	this.ddx = this.ddx + FRIX;
	// }
	// if (this.right) {
	// 	this.ddx = this.ddx + ACCEL;
	// } 
	// else if (wasright) {
	// 	this.ddx = this.ddx - FRIX;
	// }



	// this.x  = Math.floor(player.x  + player.dx);
	// this.dx = this.dx + player.ddx;
	
	



}

function checkCollision(a, b) {

	b.maxX = b.x + TILE_WIDTH;
	b.maxY = b.y + TILE_HEIGHT; 
	
	if (b.type === 1) {
		if (((a.maxY + 1 > b.y) && (a.y < b.y)) && (a.dy > 0)){
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				a.falling = false;
				a.dy = 0;
				a.jump = true;
			}
		}

		if ((a.y - 1 < b.maxY) && (a.maxY > b.maxY) && (a.dy < 0) && a.jump === false) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				a.falling = true;
				a.dy = 0;
			}
		}




		if ((!((a.maxX + 1 <= b.x) && (a.x < b.x)))) {
			if ((a.maxY >= b.y) && (a.y <= b.y) ) {	
				//a.rightBlocked = true;
			}
		}




		/* Works for grabbing onto things _under.
		if ((a.maxY > b.maxY) && (a.y > b.maxY)) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				if ((a.y - b.maxY) < 2) {
					a.vy = 0;
				}
			}
		}
		*/

	}
}

