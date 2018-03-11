var data = require('./fetchData');

module.exports = {
  moveForward: function (selectedRover, plateau) {
  	switch (selectedRover.direction) {
  		case "N":
  			if (selectedRover.position[1] > plateau[1]) { 
  				selectedRover.position[1] = 0;
  				break;
  			} else {
  				selectedRover.position[1]++;
  				break;
  			}
  			break;
  		case "E":
  			if (selectedRover.position[0] > plateau[0]) {
  				selectedRover.position[0] = 0;
  				break;
  			} else {
  				selectedRover.position[0]++;
  				break;
  			}
  			break;
  		case "S":
  			if (selectedRover.position[1] < 1) {
  				selectedRover.position[1] = plateau[1];
  				break;
  			} else {
  				selectedRover.position[1]--;
  				break;
  			}
  			break;
  		case "W":
  			if (selectedRover.position[0] < 1) {
  				selectedRover.position[0] = plateau[0];
  				break;
  			} else {
  				selectedRover.position[0]--;
  				break;
  			}
  			break;

  	}
  	return selectedRover.position
  },

  turnLeft: function (selectedRover) {
  	switch (selectedRover.direction) {
  		case "N":
  			selectedRover.direction = "W";
  			break;
  		case "E":
  			selectedRover.direction = "N";
  			break;
  		case "S":
  			selectedRover.direction = "E";
  			break;
  		case "W":
  			selectedRover.direction = "S";
  			break;
  	}
  	return selectedRover.direction
  },

  turnRight: function (selectedRover) {
  	switch (selectedRover.direction) {
  		case "N":
  			selectedRover.direction = "E";
  			break;
  		case "E":
  			selectedRover.direction = "S";
  			break;
  		case "S":
  			selectedRover.direction = "W";
  			break;
  		case "W":
  			selectedRover.direction = "N";
  			break;
  	}
  	return selectedRover.direction
  },

}
