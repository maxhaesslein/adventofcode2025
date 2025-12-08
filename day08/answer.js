
function prepareInput( input ) {

	input = input.split("\n").map(function(l){
		return l.split(',').map(function(e){
			return parseInt(e, 10);
		});
	});

	return input;
}

function distance(p1, p2) {
	return Math.sqrt(
		Math.pow(p1[0] - p2[0], 2) +
		Math.pow(p1[1] - p2[1], 2) +
		Math.pow(p1[2] - p2[2], 2)
	);
}

function getDistances( points ) {
	const distances = [];
	for( let i = 0; i < points.length; i++ ) {
		for( let j = i + 1; j < points.length; j++ ) {
			distances.push({ i, j, dist: distance(points[i], points[j]) });
		}
	}

	distances.sort(function(a, b){
		return a.dist - b.dist
	});

	return distances;
}

function answer1( points ) {

	let count = 1000;
	if( points.length < 100 ) {
		// testcase
		count = 10;
	}

	const distances = getDistances(points);


	const parent = Array(points.length).fill().map((_, i) => i);

	function find(x) {
		if( parent[x] !== x ) {
			parent[x] = find(parent[x]);
		}
		return parent[x];
	}

	function union(x, y) {
		const rootX = find(x);
		const rootY = find(y);
		if( rootX !== rootY ) {
			parent[rootX] = rootY;
		}
	}


	let connections = 0;
	for( const { i, j, dist } of distances ) {
		if( connections >= count ) break;

		union(i, j);
		connections++;
	}

	const groups = {};
	points.forEach((point, idx) => {
		const root = find(idx);
		if( ! groups[root] ) {
			groups[root] = [];
		}
		groups[root].push(point);
	});

	const sortedGroups = Object.values(groups).sort(function(a, b){
		return b.length - a.length
	});


	answer = 1;
	for( i = 0; i < 3; i++ ) {
		answer *= sortedGroups[i].length;
	}
	
	return answer;
}


function answer2( points ) {
	
	let count = 1000;
	if( points.length < 100 ) {
		// testcase
		count = 10;
	}

	const distances = getDistances(points);


	const parent = Array(points.length).fill().map((_, i) => i);
	const rank = Array(points.length).fill(0);

	function find(x) {
		if( parent[x] !== x ) {
			parent[x] = find(parent[x]);
		}
		return parent[x];
	}

	function union(x, y) {
		const rootX = find(x);
		const rootY = find(y);
		if( rootX === rootY ) {
			return false;
		}

		if( rank[rootX] < rank[rootY] ) {
			parent[rootX] = rootY;
		} else if ( rank[rootX] > rank[rootY] ) {
			parent[rootY] = rootX;
		} else {
			parent[rootX] = rootY;
			rank[rootY]++;
		}
		return true;
	}


	let components = points.length;
	let lastPoint1, lastPoint2;

	for( const { i, j, dist } of distances ) {

		if( components === 1 ) break;

		if( ! union(i, j) ) continue;

		components--;
		lastPoint1 = points[i];
		lastPoint2 = points[j];

	}

	return lastPoint1[0]*lastPoint2[0];
}
