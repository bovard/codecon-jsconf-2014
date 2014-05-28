
process.stdin.resume();
process.stdin.setEncoding('utf8');

var line;

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");
    line = lines[0]
});

process.stdin.on('end', function() {
	var len = polyMaker(line);
	process.stdout.write(len.toString());
});


function polyMaker(str) {
	var prepend = '';
	var start = 0;
	var stop = str.length - 1;

	while (start <= stop) {
		if (isPaly(str.substr(start, stop - start + 1))) {
			return prepend.length + str.length;
		}
		prepend += str.substr(stop, 1);
		stop--;
	}
	return prepend.length + str.length;
}


function isPaly(str) {
	var len = str.length;
	for (var i = 0; i < len / 2; i++) {
		if (str.substr(i, 1) !== str.substr(-(i + 1), 1)) {
			return false;
		}
	}
	return true;
}