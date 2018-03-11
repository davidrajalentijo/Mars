var moveRover = require('./marsRoversMove');

module.exports = {
enterData: function (selectedChoice, selectedRover, plateau) {

	for (var i = 0; i < selectedChoice.length; i++) {
		if (selectedChoice[i] === "M") {
			moveRover.moveForward(selectedRover, plateau);
		} else if (selectedChoice[i] === "R") {
			moveRover.turnRight(selectedRover);
		} else if (selectedChoice[i] === "L") {
			moveRover.turnLeft(selectedRover);
		} else {
			console.log("Try it again");
		}
	}
	return [selectedRover.position[0].toString(), selectedRover.position[1].toString(), selectedRover.direction].join(' ');
	}

}
