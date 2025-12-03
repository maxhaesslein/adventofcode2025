
function prepareInput( input ) {

	input = input.split("\n");

	input = input.map(function(l){
		return l.split('').map(function(el){
			return parseInt(el, 10);
		});
	});

	return input;
}

function answer1( input ) {

	let answer = 0;

	for( const batteries of input ) {
		answer += getHighestNumber( batteries, 2 );
	}

	return answer;
}

function answer2( input ) {
	
	let answer = 0;

	for( const batteries of input ) {
		answer += getHighestNumber( batteries, 12 );
	}

	return answer;
}


function getHighestNumber( remainingBatteries, numberLength ) {

	if( numberLength <= 0 ) {
		return '';
	}

	if( numberLength === remainingBatteries.length ) {
		return parseInt(remainingBatteries.join(''));
	}

	numberLength--;

	const remainingBatteriesShortened = remainingBatteries.slice(0, remainingBatteries.length-numberLength);

	const firstHighestNumber = Math.max(...remainingBatteriesShortened);
	const firstHighestNumberIndex = remainingBatteriesShortened.indexOf(firstHighestNumber);

	const remainingHighestNumber = getHighestNumber( remainingBatteries.slice(firstHighestNumberIndex + 1, remainingBatteries.length), numberLength );

	const number = parseInt(firstHighestNumber+''+remainingHighestNumber, 10);

	return number;
}
