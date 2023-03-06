// function overloading -> sẽ có tên giống nhau, có chung số lượng parameter, khác type và khác giá trị trả về
// ex
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
	return a + b;
}

interface Coodinate {
	x: number;
	y: number;
}

function parseCoodinate(obj: Coodinate): Coodinate;
function parseCoodinate(x: number, y: number): Coodinate;
function parseCoodinate(a: any, b?: any): Coodinate {
	let coord = { x: a as number, y: b as number };
	if (typeof a === 'object') {
		coord = { ...(a as Coodinate) };
	}
	return coord;
}
