var UP = 87,
	LEFT = 65,
	RIGHT = 68,
	DOWN = 83,

	SPACE  = 32

function checkKeyDown(e) {
	var keyId = e.keyCode || e.which;

	//W
	if (keyId === UP) {
		if (player.YCOLLISION === true) {
			player.vy -= GRAVITY * 2;
		}
	}

	//D
	if (keyId === RIGHT){
		player.shouldMove = true;
		LASTKEY = RIGHT;
	}

	//A
	if (keyId === LEFT){
		player.shouldMove = true;
		LASTKEY = LEFT;
	}

}

function checkKeyUp(e) {
	var keyId = e.keyCode || e.which;
	
	if (keyId === UP) {

	}

	//D
	if (keyId === RIGHT) {
		;
	}

	//A
	if (keyId === LEFT) {
		;
	}

}
