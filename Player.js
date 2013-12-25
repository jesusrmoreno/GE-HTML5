//Constructor for PlayerObjs


function PlayerObj(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.x2 = x + width;
	this.y2 = y + height;
	this.speed = 1;
	this.vx = 0;
	this.vy = 0;
}

//Our draw function. Takes a sprite
PlayerObj.prototype.draw = function(sprite) {	
	playerCtx.clearRect(0, 0, 400, 400);
	
	playerCtx.fillStyle = "#000000"
	playerCtx.fillText(player.x + "," + player.y, player.x, player.y - 2);

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

	if (((this.x % TILE_WIDTH) != 0) && (LASTKEY === LEFT)) {
		player.x = Math.floor(player.x);
		player.x += -1;
	}

	if (((this.x % TILE_WIDTH) != 0) && (LASTKEY === RIGHT)) {
		player.x = Math.floor(player.x);
		player.x += 1;
	}

}

function checkCollision(obj1, obj2) {

}
