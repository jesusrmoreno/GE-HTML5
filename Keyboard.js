var UP = 87,
	LEFT = 65,
	RIGHT = 68,
	DOWN = 83,

	SPACE  = 32

function checkKeyDown(e) {
	var keyId = e.keyCode || e.which;

	//W
	if (keyId === UP) {
		
		e.preventdefault();
	}

	//D
	if (keyId === RIGHT) {
		player.vx += player.speed;
	}

	//A
	if (keyId === LEFT) {
		
		e.preventdefault();
	}

}

function checkKeyUp(e) {
	var keyId = e.keyCode || e.which;
	//D
	if (keyId === RIGHT) {
		
	}

	//A
	if (keyId === LEFT) {
		
	}

}
