var UP = 87,
	LEFT = 65,
	RIGHT = 68,
	DOWN = 83,

	SPACE  = 32

function checkKeyDown(e) {
	var keyId = e.keyCode || e.which;

	//W
	if (keyId === UP) {
		;
	}

	//D
	if (keyId === RIGHT) {
		player.vx += player.speed;
		LASTKEY = RIGHT;
	}

	//A
	if (keyId === LEFT) {
		player.vx += -player.speed;
		LASTKEY = LEFT;
	}

}

function checkKeyUp(e) {
	var keyId = e.keyCode || e.which;
	//D
	if (keyId === RIGHT) {
		player.vx = 0;
	}

	//A
	if (keyId === LEFT) {
		player.vx = 0;
	}

}
