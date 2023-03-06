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

// promise function
const fetchData = (url: string): Promise<string> =>
	Promise.resolve(`Data get from ${url}`);

// function callback
function handleFile(text: string, callback: () => void): void {
	console.log(text);
	callback();
}

// function params with params
type FilterArray = (n: number) => number; // => function as type
const handleFillterArray = (
	number: number[],
	filter: FilterArray
): number[] => {
	return number.map((item) => filter(item));
};

// function with function
const handleValue = (val: number): ((n: number) => number) => {
	return (n: number) => n * val;
};
