var ship;
var flowers = [];
var drop;

function setup() {
	createCanvas(600, 400);
	ship = new Ship();
	drop = new Drop(width/2, height/2);
	for (var i = 0; i < 6; i++) {
		flowers[i] = new Flower(i*80+80, 20);
	}
}

function draw() {
	background(51);
	ship.show();
	drop.show();
	drop.move();
	for (var i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}
}





function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		ship.move(1);
	} else if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	}
}