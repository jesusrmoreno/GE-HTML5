



function Tile(type) {
	this.type = type;
}

Tile.prototype.setLocation = function(x, y) {
	this.x = x * TILE_WIDTH;
	this.y = y * TILE_HEIGHT;
	this.maxY;
	this.maxX;
}

Tile.prototype.draw = function(type) {
	if (this.type === 1) {
		bgCtx.fillRect(this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
	}
}