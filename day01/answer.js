
function prepareInput( input ) {

	input = input.split("\n");

	return input;
}

function answer1( input ) {

	let pos = 50;
	let answer = 0;

	for( const line of input ) {
		const direction = line.charAt(0);
		const count = parseInt(line.slice(1), 10);

		if( direction === 'L' ) {
			pos -= count;
		} else if( direction === 'R' ) {
			pos += count;
		} else {
			console.warn('error in line', line);
		}

		if( pos%100 === 0 ) answer++;

	}

	return answer;
}

function answer2( input ) {
	let pos = 50;
	let answer = 0;

	for( const line of input ) {
		const direction = line.charAt(0);
		const count = parseInt(line.slice(1), 10);

		let skipZero = false;
		if( pos === 0 ) {
			skipZero = true;
		}

		if( direction === 'L' ) {
			pos -= count;
		} else if( direction === 'R' ) {
			pos += count;
		} else {
			console.warn('error in line', line);
		}


		if( pos < 0 || pos > 99 ) {

			if( pos < 0 ) {
				if( skipZero ) {
					answer--;
				}
				while( pos < 0 ) {
					pos += 100;
					answer++;
					if( pos === 0 ) {
						answer++;
					}
				}
			} else if( pos > 99 ) {
				while( pos > 99 ) {
					pos -= 100;
					answer++;
				}
			}

		} else if( pos === 0 ) {

			answer++;

		}


	}

	return answer;
}
