



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
		bgCtx.fillStyle = "#000000";
		bgCtx.fillRect(this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
	}
}

var t2p = function(t) { return t * TILE_WIDTH; }
var p2t = function(p) { return Math.floor(p/TILE_WIDTH)}