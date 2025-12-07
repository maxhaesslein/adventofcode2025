
function prepareInput( input ) {

	input = input.split("\n").map(function(l){
		return l.split('');
	});

	return input;
}

function answer1( map ) {

	let answer = 0;

	let beams = [];

	while( map.length ) {
		const line = map.shift();

		for( let x = 0; x < line.length; x++ ) {

			const item = line[x];

			if( item === '.' ) continue;

			if( item === 'S' ) {

				// add start beam
				beams.push(x);

			} else if( item === '^' ) {

				const index = beams.indexOf(x);

				if( index === -1 ) continue;

				// split the beam

				answer++;

				beams.splice(index, 1); // remove old beam

				if( ! beams.includes(x-1) ) {
					// add new left beam
					beams.push(x-1);
				}

				if( ! beams.includes(x+1) ) {
					// add new right beam
					beams.push(x+1);
				}

			}
		}

	}

	return answer;
}

let cache = false;

function answer2( map ) {

	cache = {};

	let start = false;
	for( let y = 0; y < map.length; y++ ) {
		if( start ) break;
		for( let x = 0; x < map[y].length; x++ ) {
			if( map[y][x] === 'S' ) {
				start = {
					x: x,
					y: y
				};
				break;
			}
		}
	}

	return getNumberOfRealities(start.x, start.y+1, map);
}

function getNumberOfRealities( x, y, map ) {

	if( cache[x+'/'+y] ) {
		return cache[x+'/'+y];
	}

	if( y >= map.length ) {
		return 1;
	}

	let number = 0;

	if( map[y][x] === '^' ) {
		let numberLeft = getNumberOfRealities( x-1, y, map );
		let numberRight = getNumberOfRealities( x+1, y, map );
		number = numberLeft + numberRight;
	} else {
		number = getNumberOfRealities( x, y+1, map );
	}

	cache[x+'/'+y] = number;

	return number;
}
