const fetchData = require('./app/fetchData');
const marsRovers =require('./app/marsRovers');

fetchData.fetchData(process.argv[2]|| './input.txt', function(data){
  
  var plateau = [data[0].split(" ")[0], data[0].split(" ")[1]];

  var rovers = [{ position: [data[1].split(" ")[0], data[1].split(" ")[1]],
                  direction: data[1].split(" ")[2]},
                { position: [data[3].split(" ")[0], data[3].split(" ")[1]],
                  direction: data[3].split(" ")[2]}];

  var userChoices =[data[2],data[4]];
  
  const arrayResults= marsRovers.initRover(rovers, userChoices, plateau);

  marsRovers.printCoordinates(arrayResults)
})
