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

function processLine(line) {
	seen[line] = true
}

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    lines[0] = lingeringLine + lines[0];
    lingeringLine = lines.pop();

    lines.forEach(processLine);
});

process.stdin.on('end', function() {
	processLine(lingeringLine);
	var keys = Object.keys(seen)
for (var i = 0; i < keys.length; i++) {
		var color = keys[i];
    	if (!seen[color]) {
    		process.stdout.write(color)

    	}
    }
});