//Set up our Variables
var wTile = 20,
	hTile = 20,
	TILE_WIDTH = 16,
	TILE_HEIGHT = 16,
	METER = TILE_HEIGHT,
	MAXDX = 3,
	MAXDY = 3,
	ACCEL = MAXDX,
	FRIX  = MAXDX + 1,
	JUMP = METER * 1500,


	gameWidth = wTile * TILE_WIDTH,
	gameHeight = hTile * TILE_HEIGHT;

//Resource(Images for now) Variables	
var	IMAGES = ['player_sheet', 'bg'],
	loadedImages;

addCanvas('bgCanvas', gameWidth, gameHeight);
addCanvas('playerCanvas', gameWidth, gameHeight);

//Canvas Variables
var bgCanvas = document.getElementById('bgCanvas'),
	bgCtx = bgCanvas.getContext('2d');

var playerCanvas = document.getElementById('playerCanvas'),
	playerCtx = playerCanvas.getContext('2d');	

//Code runs 1 time when the page loads.
//Use to add listeners and to draw the background

function run(images) {
	document.addEventListener('keydown', checkKeyDown, false);
	document.addEventListener('keyup', checkKeyUp, false);
	loadedImages = images;
	bgCtx.drawImage(loadedImages.bg, 0, 0, loadedImages.bg.width / 3, loadedImages.bg.height / 3);
	startLoop();
}

//Map Code

var MAP = [ 
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
			]

//Actual game code
var GRAVITY = .2,
	LASTKEY;

var player = new PlayerObj(16, 0, 16, 16);

//This loops! 
//Any code in here will be run over and over again.
function main() {
	player.update();
	for (var i = 0; i < MAP.length; i++) {
		var tile = new Tile(MAP[i]);
		var x = i % wTile;
		var y = Math.floor(i / wTile);
		tile.setLocation(x, y);
		tile.draw();
		checkCollision(player, tile);
	}
}



loadResources(IMAGES, run);









