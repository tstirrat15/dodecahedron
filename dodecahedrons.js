// Refactor to make an object that is a dodecahedron, with a bunch of vectors as elements.
// Then we can manipulate them individually, color them as we need to, etc.

// I hope it won't involve completely refactoring. We'll see.
// But then we can just color individual things so that we can keep track of them.


function dodecahedron() {
	var phi = (1 + Math.sqrt(5)) / 2;
	var vertices = [
			[1, 1, -1],  // 0
			[-1, 1, 1],
			[1, -1, -1],
			[-1, -1, 1],
			[1, -1, 1], // 4
			[-1, 1, -1],
			[-1, -1, -1],
			[1, 1, 1],
			[0, 1/phi, phi], //green
			[0, -1/phi, phi], //9
			[0, 1/phi, -phi],
			[0, -1/phi, -phi],
			[phi, 0, 1/phi], //pink
			[-phi, 0, 1/phi],
			[phi, 0, -1/phi], // 14
			[-phi, 0, -1/phi],
			[1/phi, phi, 0], // purple 16 done
			[1/phi, -phi, 0], // 17
			[-1/phi, phi, 0],
			[-1/phi, -phi, 0] //19
		];
	var edges = make_edges(vertices);

	return edges;
}

function make_edges(vertices) {
	var vertex_pairs = [
		[16,18],
		[16,7],
		[16,0],
		[18,1],
		[18,5],
		[17,19],
		[17,2],
		[17,4],
		[19,3],
		[19,6],
		[12,14],
		[12,4],
		[12,7],
		[14,0],
		[14,2],
		[13,15],
		[13,1],
		[13,3],
		[15,5],
		[15,6],
		[10,11],
		[10,0],
		[10,5],
		[11,2],
		[11,6],
		[8,9],
		[8,1],
		[8,7],
		[9,3],
		[9,4],
	];

	var edges = [];
	for(var i=0; i<30; i++) {
		edges.push(vertices[vertex_pairs[i][0]]);
		edges.push(vertices[vertex_pairs[i][1]]);
	}
	return edges;
}

function schlegel() {
	var theta = Math.PI / 180 * 72;
	var offset_angle = Math.PI / 2;
	var inner_offset = theta / 2;
	var radii = [1, 1.5, 2, 3];
	var vertices = [];
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 5; j++) {
			if (i < 2) {
				vertices.push(make_schlegel_vector(radii[i], theta * j /*+ offset_angle*/ + inner_offset));
			} else {
				vertices.push(make_schlegel_vector(radii[i], theta * j /*+ offset_angle*/));
			}
		}
	}

	vertices = permute_vertices(vertices);

	var edges = make_edges(vertices);

	// var edges = [];

	// for (i = 0; i < vertices.length - 1; i++) {
	// 	edges.push(vertices[i])
	// 	edges.push(vertices[i+1])
	// }

	return edges;

}

function make_schlegel_vector(r, theta) {
	return [r * Math.cos(theta), r * Math.sin(theta), 0];
}

function permute_vertices(vertices) {
	// var mapping = [3, 19, 17, 4, 9, 13, 6, 2, 12, 8, 1, 15, 11, 14, 7, 18, 5, 10, 0, 16];
	// This permutation makes absolutely no fucking sense to me, but it works.
	var mapping = [18, 10, 7, 0, 3, 16, 6, 14, 9, 4, 17, 12, 8, 5, 13, 11, 19, 2, 15, 1];

	var new_vertices = [];
	for (i = 0; i < vertices.length; i++) {
		new_vertices.push(vertices[mapping[i]]);
	}

	return new_vertices;
}

function translation_factor() {
	phi = (1 + Math.sqrt(5)) / 2;
	return phi / Math.sqrt(3 - phi);
}

// And I put all of the schlegels in terms of the original vectors, meaning that I can't actually grab them directly. Hmm.