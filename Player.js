//Constructor for PlayerObjs


function PlayerObj(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.maxX = x + width;
	this.maxY = y + height;
	this.speed = 1;
	this.vx = 0;
	this.vy = 0;
	this.falling = true;
	this.jumping = true;
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
	this.x += this.vx;
	this.y += this.vy;

	this.maxX = this.x + this.width;
	this.maxY = this.y + this.height;

	this.y = Math.floor(this.y);

	if (((this.x % TILE_WIDTH) != 0) && (LASTKEY === LEFT)) {
		player.x = Math.floor(player.x);
		player.x += -1;
	}

	if (((this.x % TILE_WIDTH) != 0) && (LASTKEY === RIGHT)) {
		player.x = Math.floor(player.x);
		player.x += 1;
	}

	if (player.falling === true) {
		player.vy += GRAVITY;

	} else {
		if ((player.y % TILE_WIDTH) != 0) {
			player.y -= 1;
		}
		player.vy = 0;
	}

	player.falling = true;
	
}

function checkCollision(a, b) {

	b.maxX = b.x + TILE_WIDTH;
	b.maxY = b.y + TILE_HEIGHT; 
	
	if (b.type === 1) {
		if ((a.maxY + 1 > b.y) && (a.y < b.y) && (player.vy > 0)) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				player.falling = false;
				player.jumping = false;
				player.vy = 0;
			}
		}
	}
}

