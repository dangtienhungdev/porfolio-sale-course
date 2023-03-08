// function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
// 	return [
// 		() => val,
// 		(v: T) => {
// 			val = v;
// 		},
// 	];
// }
// const [strGetter, strSetter] = simpleUseState('evondev');
// strSetter('Developer');

interface RankItem<R> {
	item: R;
	rank: number;
}

function ranker<R>(items: R[], rank: (v: R) => number): R[] {
	const ranks: RankItem<R>[] = items.map((item) => ({
		item,
		rank: rank(item),
	}));
	return ranks.map((rank) => rank.item);
}

console.log(ranker([1, 2, 3, 4], (number) => number * 5));
