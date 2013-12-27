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
	playerCtx.fillText(Math.floor(this.x / TILE_WIDTH) + " , " + Math.floor(this.y / TILE_WIDTH) , 120, 64);
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

	if (this.right) {
		this.dx -= this.dx - ACCEL;
	}


	if (this.left)  {
		this.dx -= this.dx + ACCEL;
	}

	if ((wasright) && (this.dx > 0)) {
		this.dx -= 1;
	}

	if ((wasleft) && (this.dx < 0)) {
		this.dx += 1;
	}

	this.x += this.dx;
	this.x = Math.floor(this.x);
	this.maxX = this.x + this.width;

	this.falling = true;
}

function checkCollision(a, b) {	

	aTw = Math.floor(a.x / TILE_WIDTH);
	aTy = Math.floor(a.y / TILE_HEIGHT);
	bTw = Math.floor(b.x / TILE_WIDTH);
	bTy = Math.floor(b.y / TILE_HEIGHT);

	b.maxX = b.x + TILE_WIDTH;
	b.maxY = b.y + TILE_HEIGHT; 
	
	if (b.type === 1) {

		if (((aTy + 1) === bTy)) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				a.y = Math.floor(aTy) * 16;
				a.falling = false;
				a.dy = 0;
				a.jump = true;
			}
		}




		if (a.dx > 0) {
			if (((aTw + 1) === (bTw)) && ((aTy === bTy))) {
				a.x = Math.floor(aTw) * 16;
				a.dx = 0;
			}
		} 

		if (a.dx < 0) {
			if ((aTw === bTw) && ((aTy === bTy))) {
				a.x = Math.floor(aTw + 1) * 16;		
				a.dx = 0;
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

