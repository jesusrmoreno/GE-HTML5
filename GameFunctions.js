//Requests Animation Frame
var requestAnimFrame =  window.requestAnimationFrame || 
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.msRequestAnimationFrame ||
						window.oRequestAnimationFrame || 
						function ( callback,  element) {
							window.setTimeout(callback, 1000 / 60);
						};


//Loads our resources and calls a function when finished
function loadResources(imageNames, callback) {
	//create the variables needed
	var n, //the for loop var
		name, //the key for the result object
		result = {}, //result to hold the name:pairs
		count = imageNames.length,
		onload = function() {
			if (--count == 0) {
				callback(result);
			}
		};
		
	for (n = 0; n < imageNames.length; n++) {
		name = imageNames[n];
		result[name] = document.createElement('img');
		result[name].addEventListener('load', onload, false);
		result[name].src = "images/" + name + ".png";
	}
}

//start our main game loop
function startLoop() {
	function loop() {
		main();
		requestAnimFrame(loop);
	}
	loop();
}