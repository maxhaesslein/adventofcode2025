
function prepareInput( input ) {

	input = input.split(",");

	input = input.map(function(el){
		return el.split('-').map(function(el){
			return parseInt(el, 10);
		});
	})

	return input;
}

function answer1( input ) {
	
	let answer = 0;

	for( const line of input ) {
		const start = line[0];
		const end = line[1];

		if( ! start || ! end || start >= end ) {
			console.warn('invalid range!', line);
			continue;
		}

		for( let id = start; id <= end; id++ ) {

			if( ! /^([1-9]\d*)\1$/.test(id) ) continue;

			answer += id;
		}
	}

	return answer;
}

function answer2( input ) {
	
	let answer = 0;

	for( const line of input ) {
		const start = line[0];
		const end = line[1];

		if( ! start || ! end || start >= end ) {
			console.warn('invalid range!', line);
			continue;
		}

		for( let id = start; id <= end; id++ ) {

			if( ! /^([1-9]\d*)\1+$/.test(id) ) continue;

			answer += id;
		}
	}

	return answer;
}
