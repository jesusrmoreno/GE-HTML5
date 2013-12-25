//Set up our Variables
var wTile = 24,
	hTile = 24,
	TILE_WIDTH = 16,
	TILE_HEIGHT = 16,
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

//Actual game code
var GRAVITY = .1;

var player = new PlayerObj(0, 0, 16, 16);

//This loops! 
//Any code in here will be run over and over again.
function main() {
	player.update();
}

loadResources(IMAGES, run);









