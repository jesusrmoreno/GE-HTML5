//Set up our Variables
var wTile = 10,
	hTile = 10,
	TILE_WIDTH = 32,
	TILE_HEIGHT = 32,
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
	bgCtx.drawImage(loadedImages.bg, 0, 0, gameWidth, gameHeight);
	startLoop();
}

//Map Code

var MAP = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,  
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1,	
			]

//Actual game code
var GRAVITY = .1;

var player = new PlayerObj(0, 0, 16, 16);

//This loops! 
//Any code in here will be run over and over again.
function main() {
	player.update();
	for (var i = 0; i < MAP.length; i++) {
		var tile = new Tile(MAP[i]);
		var x = i % 10;
		var y = Math.floor(i / 10);
		tile.setLocation(x, y);
		tile.draw();
	}
}

loadResources(IMAGES, run);









