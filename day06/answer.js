
function prepareInput( input ) {

	input = input.trim().split("\n");

	return input;
}

function answer1( input ) {

	let symbols = input.pop().split(' ').map(function(l){
		return l.trim();
	});
	symbols = symbols.filter(Boolean);

	let problems = input.map(function(l){
		l = l.split(' ').map(function(n){
			return parseInt(n, 10);
		});

		return l.filter(Boolean);
	});

	let answer = 0;

	for( let i = 0; i < symbols.length; i++ ) {

		const symbol = symbols[i];

		let answer_part = 0;

		if( symbol === '+' ) {

			for( const problem of problems ) {
				answer_part += problem[i];
			}

		} else if( symbol === '*' ) {
			answer_part = 1;

			for( const problem of problems ) {
				answer_part *= problem[i];
			}

		}

		answer += answer_part;

	}

	return answer;
}

function answer2( input ) {
	
	let symbols = input.pop().split(' ').map(function(l){
		return l.trim();
	});
	symbols = symbols.filter(Boolean).reverse();

	let problems = input.map(function(l){
		return l.split('');
	});

	let answer = 0;

	for( const symbol of symbols ) {

		let numbers = [];

		let number = true;
		while( number ) {
			let number = ''
			for( const problem of problems ) {
				number += ''+problem.pop();
			}
			if( number.trim() ) {
				number = parseInt(number, 10);
			} else {
				number = false;
			}

			if( ! number ) break;

			numbers.push(number);

		}

		let answer_part = 0;

		if( symbol === '+' ) {

			for( const number of numbers ) {
				answer_part += number;
			}

		} else if( symbol === '*' ) {
			answer_part = 1;

			for( const number of numbers ) {
				answer_part *= number;
			}

		}

		answer += answer_part;

	}


	return answer;
}
