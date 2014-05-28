seen = {
	White: false,
	Black: false,
	Blue: false,
	Red: false,
	Yellow: false
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

var things = [[], [], []];

var inc = -1;
function processLine(line) {
	if (line.split(' ').length > 1 || line === '') {
		inc++;
	} else {
		things[inc].push(parseInt(line));
	}
}

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    lines[0] = lingeringLine + lines[0];
    lingeringLine = lines.pop();

    lines.forEach(processLine);
});

process.stdin.on('end', function() {
	var i, j, k;
	processLine(lingeringLine);
	
	var results = {};

	for (i = 0; i < things[0].length; i++) {
		for (j = 0; j < things[1].length; j++) {
			for (k = 0; k < things[2].length; k++) {
				var result = things[0][i] + things[1][j] + things[2][k];
				if (!results[result]) {
					results[result] = 1;
				} else {
					results[result] += 1;
				}

			}
		}
	}

	var keys = Object.keys(results);
	var max = 0;
	var result = -1;
	for (i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (results[key] > max) {
			max = results[key]
			result = key;
		}
	}

	process.stdout.write(result.toString());
});