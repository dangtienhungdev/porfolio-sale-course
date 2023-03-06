type ThreeCoodinate = [x: number, y: number, z: number];

function add3DCoodinate(a: ThreeCoodinate, b: ThreeCoodinate): ThreeCoodinate {
	return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
