const fs = require('fs');

describe('initRover', function(){

it ('Should return the position of the first rover', function(){	
    fs.readFile('./input.txt', 'utf8', function(err, data) {
    	var newdata = data.split("\n")
		
		var plateau = [newdata[0].split(" ")[0], newdata[0].split(" ")[1]];
		      
		var rovers = [{ position: [newdata[1].split(" ")[0], newdata[1].split(" ")[1]],
                     direction: newdata[1].split(" ")[2]},
      				 { position: [newdata[3].split(" ")[0], newdata[3].split(" ")[1]],
                     direction: newdata[3].split(" ")[2]}];
      
      var userChoices =[newdata[2],newdata[4]]

      marsRovers.initRover(rovers, userChoices, plateau)[0].should.equal('1 3 N');
    });
});   

it ('Should return the position of the second rover', function(){
	fs.readFile('./input.txt', 'utf8', function(err, data) {
    	var newdata = data.split("\n")

		var plateau = [newdata[0].split(" ")[0], newdata[0].split(" ")[1]];
		
		var rovers = [{ position: [newdata[1].split(" ")[0], newdata[1].split(" ")[1]],
                     direction: newdata[1].split(" ")[2]},
      			     { position: [newdata[3].split(" ")[0], newdata[3].split(" ")[1]],
                     direction: newdata[3].split(" ")[2]}];
      
      	var userChoices =[newdata[2],newdata[4]]

		marsRovers.initRover(rovers, userChoices, plateau)[1].should.equal('5 1 E');
	});
});

})