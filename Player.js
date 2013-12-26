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
	
	playerCtx.fillStyle = "#000000"
	playerCtx.fillText(player.x + "," + player.y, player.x, player.y - 2);
	playerCtx.fillText(player.maxX + "," + player.maxY, player.x, player.y - 12);

	playerCtx.fillStyle = "#FFFF00";
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

	b.maxX = b.x + 16;
	b.maxY = b.y + 16; 
	if (b.type === 1) {
		if (!((a.maxY < b.y) || (a.y > b.maxY))) {
			if (!((a.maxX > b.x) || (a.minX < b.maxX))) {
				a.falling = false;
				a.jumping = false;
				a.vy = 0;
			}
		}
	}
}

