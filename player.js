//Constructor for PlayerObjs


function PlayerObj(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.speed = .2;
	this.vx = 0;
	this.vy = 0;
}

//Our draw function. Takes a sprite
PlayerObj.prototype.draw = function(sprite) {	
	playerCtx.clearRect(0, 0, 400, 400);
	playerCtx.fillStyle = "#FFFF00";
	playerCtx.fillRect(this.x, this.y, this.width, this.height);

}

//The Update function of our player. eg: The Brains.
PlayerObj.prototype.update = function() {
	this.draw();
	this.physics();
}

PlayerObj.prototype.physics = function() {
	this.x += this.vx;
}