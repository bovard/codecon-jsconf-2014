
process.stdin.resume();
process.stdin.setEncoding('utf8');

var line;

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");
    line = lines[0];

});

process.stdin.on('end', function() {
	var input = line.split(' ');
	var seed = input[0];
	var iters = parseInt(input[1]);

	var newStr = seed;
	for (var i = 0; i < iters; i++) {
		newStr = parseAndMake(newStr);
	}

	process.stdout.write(newStr.length.toString());
});	


function parseAndMake(str) {
	var token = '';
	var count = 0;

	var newStr = '';
	for (var i = 0; i < str.length; i++) {
		if (count === 0) {
			token = str.substr(i, 1);
			count = 1;
		} else {
			if (token === str.substr(i, 1)) {
				count += 1;
			} else {
				newStr += count;
				newStr += token;
				token = str.substr(i, 1);
				count = 1;
			}
		}
	}
	newStr += count;
	newStr += token;
	return newStr;
}
