
function prepareInput( input ) {

	input = input.split("\n").map(function(l){
		return l.split('');
	});

	return input;
}

function answer1( map ) {

	let answer = 0;

	for( let y = 0; y < map.length; y++ ) {
		for( let x = 0; x < map[y].length; x++ ) {
			const cel = getCellAtPosition(map, x, y);

			if( cel != '@' ) continue;

			let neighbours = 0;

			if( getCellAtPosition(map, x-1, y) === '@' ) neighbours++;
			if( getCellAtPosition(map, x+1, y) === '@' ) neighbours++;
			if( getCellAtPosition(map, x, y-1) === '@' ) neighbours++;
			if( getCellAtPosition(map, x, y+1) === '@' ) neighbours++;
			if( getCellAtPosition(map, x-1, y-1) === '@' ) neighbours++;
			if( getCellAtPosition(map, x-1, y+1) === '@' ) neighbours++;
			if( getCellAtPosition(map, x+1, y-1) === '@' ) neighbours++;
			if( getCellAtPosition(map, x+1, y+1) === '@' ) neighbours++;

			if( neighbours >= 4 ) continue;

			answer++;
			
		}
	}

	return answer;
}

function answer2( map ) {
	
	let answer = 0;
	let removed = true;

	while( removed ) {

		removed = false;

		for( let y = 0; y < map.length; y++ ) {
			for( let x = 0; x < map[y].length; x++ ) {
				const cel = getCellAtPosition(map, x, y);

				if( cel != '@' ) continue;

				let neighbours = 0;

				if( getCellAtPosition(map, x-1, y) === '@' ) neighbours++;
				if( getCellAtPosition(map, x+1, y) === '@' ) neighbours++;
				if( getCellAtPosition(map, x, y-1) === '@' ) neighbours++;
				if( getCellAtPosition(map, x, y+1) === '@' ) neighbours++;
				if( getCellAtPosition(map, x-1, y-1) === '@' ) neighbours++;
				if( getCellAtPosition(map, x-1, y+1) === '@' ) neighbours++;
				if( getCellAtPosition(map, x+1, y-1) === '@' ) neighbours++;
				if( getCellAtPosition(map, x+1, y+1) === '@' ) neighbours++;

				if( neighbours >= 4 ) continue;

				answer++;
				removed = true;

				map[y][x] = 'x';
				
			}
		}
	}

	return answer;
}

function getCellAtPosition( map, x, y ) {

	if( y < 0 || y >= map.length ) return false;
	if( x < 0 || x >= map[y].length ) return false;

	return map[y][x];
}
