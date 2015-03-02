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
	var r1 = 1
	var r2 = 1.5
	var r3 = 2
	var r4 = 3

	

}

function make_schlegel_vector(r, theta) {
	return [r * Math.cos(theta), Math.sin(theta), 0];
}