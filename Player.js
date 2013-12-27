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

	this.isFalling = true;
	this.isJumping = false;	

	this.YCOLLISION = false;
}

//Our draw function. Takes a sprite
PlayerObj.prototype.draw = function(sprite) {	
	playerCtx.clearRect(0, 0, 400, 400);
	playerCtx.fillStyle = "#003b6f";
	playerCtx.fillText(this.YCOLLISION + "," + this.XCOLLISION, 120, 120);
	playerCtx.fillRect(this.x, this.y, this.width, this.height);
}

//The Update function of our player. eg: The Brains.
PlayerObj.prototype.update = function() {
	this.draw();
	this.physics();

	switch(LASTKEY) {
		case UP:
			this.upKey();
		case LEFT:
			this.leftKey();
		case RIGHT:
			this.rightKey();
	}
}


PlayerObj.prototype.upKey = function() {
	
}

PlayerObj.prototype.leftKey = function() {

}

PlayerObj.prototype.rightKey = function() {

}


PlayerObj.prototype.physics = function() {

	player.y = Math.floor(player.y);

	
	if (!this.YCOLLISION){
		player.vy += GRAVITY;
		player.y += player.vy;
	} else {
		player.vy = 0;
		
		if ((player.y % 16) != 0) {
			player.y -= 1;
		}
	}
	player.maxY = player.y + player.height;

	//Update the postion of PlayerObj

	// if ((LASTKEY === RIGHT) && (this.shouldMove === true)) {
	// 	this.vx = this.speed;
	// }

	// if ((LASTKEY === LEFT) && (this.shouldMove === true)) {
	// 	this.vx = -this.speed;
	// }
	

	// if (this.shouldMove === true) {
	// 	this.x += this.vx;
	// }
	// this.y += this.vy;

	// this.maxX = this.x + this.width;
	// this.maxY = this.y + this.height;




	// this.y = Math.floor(this.y);

	// if ((((this.x % TILE_WIDTH) != 0) && (LASTKEY === LEFT)) && (this.shouldMove === true)) {
	// 	player.x = Math.floor(player.x);
	// 	player.x += -1;
	// }

	// if ((((this.x % TILE_WIDTH) != 0) && (LASTKEY === RIGHT)) && (this.shouldMove === true)) {
	// 	player.x = Math.floor(player.x);
	// 	player.x += 1;
	// }


	
	
}

function checkVertCollision(a, b) {

	b.maxX = b.x + TILE_WIDTH;
	b.maxY = b.y + TILE_HEIGHT; 
		
	if (b.type === 1) {
		if ((a.maxY + 1 > b.y) && (a.y < b.y)) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				a.YCOLLISION = true;
			} 
		} else {
			a.YCOLLISION = false;
		}
	}
}






function checkHorCollision(a, b) {

	b.maxX = b.x + TILE_WIDTH;
	b.maxY = b.y + TILE_HEIGHT; 
		
	if (b.type === 1) {
		if ((((a.maxX + 1) > b.x) && (a.x < b.x)) || (((a.x - 1) < b.maxX) && a.maxX > b.maxX)) {
			if (a.y === b.y) {	
				a.XCOLLISION = true;
			}
		} else {
			a.XCOLLISION = false;
		}
	} 
}

