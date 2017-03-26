function initButterfly2 (startingX, startingY) {
	var newButterfly2 = {};
	newButterfly2.x = startingX;
	newButterfly2.y = startingY;
	newButterfly2.captured = false;

	var butterflyImg2 = new Image();
	butterflyImg2.onload = function () {
		newButterfly2.width = 75;
		newButterfly2.height = butterflyImg2.height;

		newButterfly2.spriteSheet = butterflyImg2;

		newButterfly2.flyingSprite = sprite({
			width: newButterfly2.width,
			height: newButterfly2.height,
			image: newButterfly2.spriteSheet,
			numberOfFrames: 2,
			startingFrameIndex: 0,
			ticksPerFrame: (Math.random() * 10) + 8,  // random wing flap rate between 8 and 18
			loop: true
		});

		newButterfly2.render = function () {
			newButterfly2.flyingSprite.render(newButterfly2.canvasX, newButterfly2.canvasY);
		};

		newButterfly2.update = function () {
			newButterfly2.flyingSprite.update();
		};
	};

	newButterfly2.capture = function() {
		newButterfly2.captured = true;
	};

	butterflyImg2.src = "imgs/butterfly-sprite2.png";

	return newButterfly2;
}