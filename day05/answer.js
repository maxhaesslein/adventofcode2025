
function prepareInput( input ) {

	input = input.split("\n\n").map(function(p){
		return p.split("\n");
	});

	return {
		'freshIdRanges': input[0].map(function(l){
			l = l.split('-');
			return {
				'min': parseInt(l[0], 10),
				'max': parseInt(l[1], 10)
			}
		}),
		'ids': input[1].map(function(n){
			return parseInt(n, 10);
		})
	}
}

function answer1( input ) {

	let totalCount = 0;

	for( const id of input.ids ) {

		let isFresh = false;
		for( const range of input.freshIdRanges ) {
			if( id < range.min || id > range.max ) continue;

			isFresh = true;
			break;
		}

		if( isFresh ) totalCount++;

	}

	return totalCount;
}

function answer2( input ) {

	const ranges = input.freshIdRanges;

	ranges.sort((a, b) => a.min - b.min);

	const merged = [];

	for( const range of ranges ) {

		if( ! merged.length || merged[merged.length - 1].max < range.min - 1) {
			merged.push({ ...range });
		} else {
			merged[merged.length - 1].max = Math.max(merged[merged.length - 1].max, range.max);
		}

	}

	const totalCount = merged.reduce(function(sum, range) {
		return sum + (range.max - range.min + 1);
	}, 0);

	return totalCount;
}
