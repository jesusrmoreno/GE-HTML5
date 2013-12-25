//Set up our Variables
var wTile = 24,
	hTile = 24,
	TILE = 16,
	gameWidth = wTile * TILE,
	gameHeight = hTile * TILE;

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

//Add listeners and stuff
function run(images) {
	document.addEventListener('keydown', checkKeyDown, false);
	document.addEventListener('keyup', checkKeyUp, false);
	loadedImages = images;
	bgCtx.drawImage(loadedImages.bg, 0, 0, gameWidth, gameHeight);
	startLoop();
}

var player = new PlayerObj(0, 0, 16, 16);

//This loops! 
//Any code in here will be run over and over again.
function main() {
	player.update();
}

loadResources(IMAGES, run);









