const fs = require('fs');

function fetchData(fileName, callback){
	const dataStream = fs.createReadStream(fileName, 'utf8');
  	let buffer ="";
	
	dataStream.on('data', function(chunk) {
      buffer += chunk;
  	}).on('end', function() {
      callback(buffer.split("\n"));
	})
}

module.exports = {
   fetchData: fetchData
}
