var UP = 87,
	LEFT = 65,
	RIGHT = 68,
	DOWN = 83,

	SPACE  = 32

function checkKeyDown(e) {
	var keyId = e.keyCode || e.which;
	switch(keyId) {
		case UP:
			player.up = true;
			return false;
		case RIGHT:
			player.right = true;
			return false;
		case LEFT:
			player.left = true;
			return false;
	}
}

function checkKeyUp(e) {
	var keyId = e.keyCode || e.which;
	switch(keyId) {
		case UP:
			player.up = false;
			return false;
		case RIGHT:
			player.right = false;
			return false;
		case LEFT:
			player.left = false;
			return false;
	}
}